import { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import type { CommunityComponent } from "@/components/community/community-card"
import { CommunityGrid } from "@/components/community/community-grid"
import { db, communityComponents, profiles } from "@/lib/db"
import { desc, eq, ilike, inArray } from "drizzle-orm"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Community Components | Pioneer UI",
  description:
    "Browse community-submitted animated React components. Free to copy, customize, and ship.",
}

const CATEGORIES = ["All", "Button", "Card", "Background", "Effect", "Navigation", "Form", "Text", "Loader"]

interface PageProps {
  searchParams: { category?: string; sort?: string }
}

export default async function CommunityPage({ searchParams }: PageProps) {
  const category = searchParams.category ?? "All"
  const sort = searchParams.sort ?? "newest"

  let components: CommunityComponent[] | null = null

  try {
    const rows = await db
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
        category !== "All"
          ? ilike(communityComponents.category, category)
          : inArray(communityComponents.status, ["approved", "featured"]),
      )
      .orderBy(
        sort === "popular" ? desc(communityComponents.copyCount) : desc(communityComponents.createdAt),
      )
      .limit(48)

    components = rows as unknown as CommunityComponent[]
  } catch {
    // DB not configured — show empty state
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-12 text-center backdrop-blur-sm">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Community Components
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Animated React components submitted by developers worldwide. Copy, install, and customize.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/submit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-600 text-white hover:bg-violet-500",
            )}
          >
            <Plus className="mr-2 size-4" />
            Submit Component
          </Link>
          <Link
            href="/contributors"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View Contributors
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/community?category=${cat}&sort=${sort}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors",
                  category === cat
                    ? "bg-violet-600 text-white"
                    : "border border-border bg-background text-muted-foreground hover:bg-accent",
                )}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Sort */}
          <div className="flex gap-2">
            {(["newest", "popular", "trending"] as const).map((s) => (
              <Link
                key={s}
                href={`/community?category=${category}&sort=${s}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm capitalize transition-colors",
                  sort === s
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:bg-accent",
                )}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid */}
        {components && components.length > 0 ? (
          <CommunityGrid components={components as CommunityComponent[]} />
        ) : (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-muted/50">
              <Plus className="size-8 text-muted-foreground/40" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">No components yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Be the first to submit in this category.
              </p>
            </div>
            <Link
              href="/submit"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-violet-600 text-white hover:bg-violet-500",
              )}
            >
              <Plus className="mr-1.5 size-3.5" />
              Submit Component
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
