import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { db, profiles, communityComponents } from "@/lib/db"
import type { Profile } from "@/lib/db/schema"
import { desc, eq, inArray } from "drizzle-orm"
import { CommunityCard, type CommunityComponent } from "@/components/community/community-card"

interface Props {
  params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `@${params.username} | Pioneer UI`,
    description: `${params.username}'s community components on Pioneer UI.`,
  }
}

export default async function ContributorProfilePage({ params }: Props) {
  let profile: Profile | null = null
  let components: CommunityComponent[] = []

  try {
    const [profileData] = await db
      .select()
      .from(profiles)
      .where(eq(profiles.username, params.username))
      .limit(1)

    if (!profileData) notFound()
    profile = profileData

    const componentData = await db
      .select({
        id:          communityComponents.id,
        slug:        communityComponents.slug,
        title:       communityComponents.title,
        description: communityComponents.description,
        category:    communityComponents.category,
        tags:        communityComponents.tags,
        status:      communityComponents.status,
        copyCount:   communityComponents.copyCount,
        saveCount:   communityComponents.saveCount,
        featured:    communityComponents.featured,
        createdAt:   communityComponents.createdAt,
        author: {
          id:        profiles.id,
          username:  profiles.username,
          name:      profiles.name,
          avatarUrl: profiles.avatarUrl,
        },
      })
      .from(communityComponents)
      .leftJoin(profiles, eq(communityComponents.authorId, profiles.id))
      .where(
        inArray(communityComponents.status, ["approved", "featured"]),
      )
      .orderBy(desc(communityComponents.createdAt))

    components = componentData as unknown as CommunityComponent[]
  } catch {
    notFound()
  }

  if (!profile) notFound()

  return (
    <div className="min-h-screen py-14">
      <div className="container mx-auto px-4">
        {/* Profile header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.username}
              className="size-24 rounded-full object-cover ring-4 ring-violet-500/20"
            />
          ) : (
            <div className="flex size-24 items-center justify-center rounded-full bg-violet-500/20 text-3xl font-bold text-violet-400 ring-4 ring-violet-500/20">
              {profile.username.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {profile.name ?? profile.username}
            </h1>
            <p className="text-muted-foreground">@{profile.username}</p>
          </div>

          {profile.bio && (
            <p className="max-w-md text-muted-foreground">{profile.bio}</p>
          )}

          <div className="flex gap-3">
            {profile.githubUrl && (
              <Link
                href={profile.githubUrl}
                target="_blank"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <Github className="size-4" />
                GitHub
              </Link>
            )}
            {profile.website && (
              <Link
                href={profile.website}
                target="_blank"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                Website
              </Link>
            )}
          </div>

          <div className="flex items-center gap-1 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm">
            <span className="font-bold text-violet-500">{profile.componentCount ?? 0}</span>
            <span className="text-muted-foreground ml-1">component{(profile.componentCount ?? 0) !== 1 ? "s" : ""} published</span>
          </div>
        </div>

        {/* Components grid */}
        {components.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((comp) => (
              <CommunityCard key={comp.id} component={comp as CommunityComponent} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No published components yet.</p>
        )}
      </div>
    </div>
  )
}
