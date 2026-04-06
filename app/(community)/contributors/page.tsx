import { Metadata } from "next"
import Link from "next/link"
import { Github } from "lucide-react"
import { db, profiles } from "@/lib/db"
import { desc, gt } from "drizzle-orm"

export const metadata: Metadata = {
  title: "Contributors | Pioneer UI",
  description: "Meet the developers who contribute components to the Pioneer UI community.",
}

export default async function ContributorsPage() {
  let contributors: { id: string; username: string; name: string | null; avatarUrl: string | null; githubUrl: string | null; componentCount: number }[] | null = null

  try {
    contributors = await db
      .select({
        id:             profiles.id,
        username:       profiles.username,
        name:           profiles.name,
        avatarUrl:      profiles.avatarUrl,
        githubUrl:      profiles.githubUrl,
        componentCount: profiles.componentCount,
      })
      .from(profiles)
      .where(gt(profiles.componentCount, 0))
      .orderBy(desc(profiles.componentCount))
      .limit(60)
  } catch {
    // DB not configured
  }

  return (
    <div className="min-h-screen py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Contributors</h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            The developers building and sharing components with the Pioneer UI community.
          </p>
        </div>

        {contributors && contributors.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contributors.map((contributor) => (
              <Link
                key={contributor.id}
                href={`/contributors/${contributor.username}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {contributor.avatarUrl ? (
                  <img
                    src={contributor.avatarUrl}
                    alt={contributor.username}
                    className="size-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex size-16 items-center justify-center rounded-full bg-violet-500/20 text-2xl font-bold text-violet-400">
                    {contributor.username.charAt(0).toUpperCase()}
                  </div>
                )}

                <div>
                  <p className="font-semibold text-foreground">
                    {contributor.name ?? contributor.username}
                  </p>
                  <p className="text-sm text-muted-foreground">@{contributor.username}</p>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-violet-500">
                    {contributor.componentCount}
                  </span>
                  <span>component{contributor.componentCount !== 1 ? "s" : ""}</span>
                </div>

                {contributor.githubUrl && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <Github className="size-3.5" />
                    GitHub
                  </div>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-lg font-medium text-foreground">No contributors yet</p>
            <p className="mt-2 text-muted-foreground">
              Be the first!{" "}
              <Link href="/submit" className="text-violet-500 underline underline-offset-4">
                Submit a component
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
