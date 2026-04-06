import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Copy, ExternalLink, Github, Tag } from "lucide-react"
import { db, communityComponents, profiles } from "@/lib/db"
import { eq, inArray } from "drizzle-orm"
import { cn } from "@/lib/utils"

interface Props {
  params: { slug: string }
}

type ComponentRow = {
  id: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  componentCode: string
  demoCode: string
  dependencies: string[]
  status: string
  copyCount: number
  saveCount: number
  featured: boolean
  approvedAt: Date | null
  createdAt: Date
  author: {
    id: string | null
    username: string | null
    name: string | null
    avatarUrl: string | null
    githubUrl: string | null
    website: string | null
    componentCount: number | null
  } | null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const [data] = await db
      .select({ title: communityComponents.title, description: communityComponents.description })
      .from(communityComponents)
      .where(eq(communityComponents.slug, params.slug))
      .limit(1)

    if (!data) return { title: "Component Not Found | Pioneer UI" }
    return {
      title: `${data.title} | Pioneer UI Community`,
      description: data.description,
    }
  } catch {
    return { title: "Component Not Found | Pioneer UI" }
  }
}

export default async function CommunityComponentPage({ params }: Props) {
  let component: ComponentRow | null = null

  try {
    const [row] = await db
      .select({
        id:            communityComponents.id,
        slug:          communityComponents.slug,
        title:         communityComponents.title,
        description:   communityComponents.description,
        category:      communityComponents.category,
        tags:          communityComponents.tags,
        componentCode: communityComponents.componentCode,
        demoCode:      communityComponents.demoCode,
        dependencies:  communityComponents.dependencies,
        status:        communityComponents.status,
        copyCount:     communityComponents.copyCount,
        saveCount:     communityComponents.saveCount,
        featured:      communityComponents.featured,
        approvedAt:    communityComponents.approvedAt,
        createdAt:     communityComponents.createdAt,
        author: {
          id:             profiles.id,
          username:       profiles.username,
          name:           profiles.name,
          avatarUrl:      profiles.avatarUrl,
          githubUrl:      profiles.githubUrl,
          website:        profiles.website,
          componentCount: profiles.componentCount,
        },
      })
      .from(communityComponents)
      .leftJoin(profiles, eq(communityComponents.authorId, profiles.id))
      .where(eq(communityComponents.slug, params.slug))
      .limit(1)

    if (row && (["approved", "featured"] as string[]).includes(row.status)) {
      component = row as ComponentRow
    }
  } catch {
    // DB not configured
  }

  if (!component) notFound()

  const installCmd  = `npx shadcn@latest add "https://pioneerui.com/r/${component.slug}"`
  const formattedDate = new Date(component.createdAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Left: Preview + Code */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/community" className="hover:text-foreground">Community</Link>
                <span>/</span>
                <span className="text-foreground">{component.title}</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold text-foreground">{component.title}</h1>
              <p className="mt-2 text-muted-foreground">{component.description}</p>
            </div>

            {/* Preview tabs */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex border-b border-border bg-muted/40 px-4">
                {["Preview", "Component", "Demo"].map((tab, i) => (
                  <button
                    key={tab}
                    className={cn(
                      "px-4 py-3 text-sm font-medium transition-colors",
                      i === 0
                        ? "border-b-2 border-violet-500 text-violet-500"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex min-h-[400px] items-center justify-center bg-zinc-50 p-8 dark:bg-zinc-950">
                <p className="text-sm text-muted-foreground">Live preview coming soon</p>
              </div>
            </div>

            {/* Component code */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="text-sm font-medium">Component Code</span>
                <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent">
                  <Copy className="size-3" />
                  Copy
                </button>
              </div>
              <pre className="overflow-x-auto p-5 text-xs text-foreground">
                <code>{component.componentCode}</code>
              </pre>
            </div>

            {/* Demo code */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="text-sm font-medium">Demo Code</span>
                <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent">
                  <Copy className="size-3" />
                  Copy
                </button>
              </div>
              <pre className="overflow-x-auto p-5 text-xs text-foreground">
                <code>{component.demoCode}</code>
              </pre>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="flex flex-col gap-5">
            {/* Install */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="mb-3 text-sm font-semibold">Install</h2>
              <div className="flex items-center gap-2 rounded-lg bg-zinc-950 px-3 py-2">
                <code className="flex-1 overflow-x-auto whitespace-nowrap text-xs text-zinc-300">
                  {installCmd}
                </code>
                <button className="shrink-0 text-zinc-400 hover:text-white">
                  <Copy className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Author */}
            {component.author && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <h2 className="mb-4 text-sm font-semibold">Author</h2>
                <div className="flex items-center gap-3">
                  {component.author.avatarUrl ? (
                    <img
                      src={component.author.avatarUrl}
                      alt={component.author.username ?? ""}
                      className="size-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex size-11 items-center justify-center rounded-full bg-violet-500/20 text-base font-bold text-violet-400">
                      {component.author.username?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">
                      {component.author.name ?? component.author.username}
                    </p>
                    <Link
                      href={`/contributors/${component.author.username}`}
                      className="text-xs text-violet-500 hover:underline"
                    >
                      @{component.author.username}
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {component.author.githubUrl && (
                    <Link
                      href={component.author.githubUrl}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Github className="size-3.5" />
                      GitHub
                    </Link>
                  )}
                  {component.author.website && (
                    <Link
                      href={component.author.website}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="size-3.5" />
                      Website
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Details */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="mb-4 text-sm font-semibold">Details</h2>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="size-3.5 shrink-0" />
                  <span className="capitalize">{component.category}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="size-3.5 shrink-0" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Copy className="size-3.5 shrink-0" />
                  <span>{component.copyCount.toLocaleString()} copies</span>
                </div>
              </dl>

              {component.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {component.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Dependencies */}
            {component.dependencies.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <h2 className="mb-3 text-sm font-semibold">Dependencies</h2>
                <div className="flex flex-col gap-1.5">
                  {component.dependencies.map((dep) => (
                    <code key={dep} className="text-xs text-muted-foreground">{dep}</code>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
