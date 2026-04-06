import { ComponentGallery, type GalleryComponent } from "@/components/component-gallery"
import { docsConfig } from "@/config/docs"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Components | Pioneer UI",
  description:
    "Browse 50+ animated, accessible React components. Filter by category, search by name, and install any component in one CLI command.",
}

// Categories that contain components (exclude Getting Started, Templates, etc.)
const COMPONENT_CATEGORIES = [
  "Backgrounds",
  "Cards",
  "Special Effects",
  "Loaders",
  "Testimonials",
  "Pricing",
  "Navigation",
  "Hero Sections",
]

export default function ComponentsPage() {
  // Flatten docsConfig sidebar into a component list
  const components: GalleryComponent[] = []
  const categories: string[] = []

  for (const group of docsConfig.sidebarNav) {
    if (!COMPONENT_CATEGORIES.includes(group.title)) continue
    if (!categories.includes(group.title)) categories.push(group.title)

    for (const item of group.items ?? []) {
      if (!item.href) continue
      components.push({
        title: item.title,
        href: item.href,
        category: group.title,
        isNew: item.label === "New",
      })
    }
  }

  const newCount = components.filter((c) => c.isNew).length

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 lg:py-12">
      {/* Hero header */}
      <div className="mb-10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
            {newCount} new this month
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
            {components.length} total components
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          Component Library
        </h1>
        <p className="max-w-xl text-base text-muted-foreground">
          Copy-paste animated components built with React, Tailwind, and Framer Motion.
          Install any component in one CLI command.
        </p>
      </div>

      {/* Contribute CTA */}
      <div className="mb-8 flex items-center gap-4 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-5 py-4">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">
            Build something cool? Share it with the community.
          </p>
          <p className="text-xs text-muted-foreground">
            PioneerUI is open to contributor submissions. Get featured alongside 50+ components.
          </p>
        </div>
        <Link
          href="/docs/contributing"
          className="flex-shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Contribute
        </Link>
      </div>

      {/* Gallery */}
      <ComponentGallery components={components} categories={categories} />
    </main>
  )
}
