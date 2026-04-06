"use client"

import React, { useState, useCallback, useLayoutEffect, useRef, useMemo } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

export interface GalleryComponent {
  title: string
  href: string
  category: string
  isNew?: boolean
  description?: string
}

interface ComponentGalleryProps {
  components: GalleryComponent[]
  categories: string[]
}

// Category → gradient mapping for the preview tile
const categoryGradients: Record<string, string> = {
  "All": "",
  "Backgrounds": "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
  "Cards": "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  "Special Effects": "from-pink-500/20 via-rose-500/20 to-red-500/20",
  "Loaders": "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
  "Testimonials": "from-emerald-500/20 via-green-500/20 to-lime-500/20",
  "Pricing": "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
  "Navigation": "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  "Hero Sections": "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
  "Getting Started": "from-zinc-500/20 via-slate-500/20 to-gray-500/20",
}

const categoryDot: Record<string, string> = {
  "Backgrounds": "bg-indigo-400",
  "Cards": "bg-cyan-400",
  "Special Effects": "bg-pink-400",
  "Loaders": "bg-amber-400",
  "Testimonials": "bg-emerald-400",
  "Pricing": "bg-sky-400",
  "Navigation": "bg-violet-400",
  "Hero Sections": "bg-rose-400",
  "Getting Started": "bg-zinc-400",
}

function ComponentCard({ comp }: { comp: GalleryComponent }) {
  const [copied, setCopied] = useState(false)
  const slug = comp.href.split("/").pop() ?? ""
  const installCmd = `npx shadcn@latest add "https://pioneerui.com/r/${slug}"`
  const gradient = categoryGradients[comp.category] ?? "from-zinc-500/10 via-slate-500/10 to-gray-500/10"
  const dot = categoryDot[comp.category] ?? "bg-zinc-400"

  const handleCopy = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      navigator.clipboard.writeText(installCmd).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    },
    [installCmd],
  )

  return (
    <div className="gallery-card group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      {/* Preview area */}
      <Link href={comp.href} className="block">
        <div
          className={cn(
            "relative flex h-36 items-center justify-center bg-gradient-to-br",
            gradient,
            "border-b border-border transition-all duration-300 group-hover:opacity-90",
          )}
        >
          {/* Decorative shapes for visual identity */}
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <div className="absolute left-1/4 top-1/3 h-12 w-12 rounded-full bg-white/10 blur-xl" />
            <div className="absolute right-1/4 bottom-1/3 h-8 w-8 rounded-full bg-white/10 blur-lg" />
          </div>
          <span className="relative text-2xl font-bold tracking-tight text-foreground/30 select-none">
            {comp.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
          </span>
          {comp.isNew && (
            <span className="absolute right-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
              New
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <span className={cn("h-2 w-2 flex-shrink-0 rounded-full", dot)} />
          <span className="truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {comp.category}
          </span>
        </div>
        <Link href={comp.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          {comp.title}
        </Link>

        {/* CLI install */}
        <div className="mt-auto flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground">
          <span className="flex-1 truncate">
            npx shadcn add &quot;{`…/${slug}`}&quot;
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy install command"
            className="flex-shrink-0 rounded p-0.5 text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            {copied ? (
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ComponentGallery({ components, categories }: ComponentGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [query, setQuery] = useState("")
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = components.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory
    const matchQ =
      !query ||
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  // Per-category component counts for pill badges
  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((cat) => [cat, components.filter((c) => c.category === cat).length]),
      ),
    [components, categories],
  )

  // GSAP stagger entrance whenever filter changes
  useLayoutEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll(".gallery-card")
    if (!cards.length) return
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.04,
        clearProps: "transform",
      },
    )
  }, [filtered.length, activeCategory])

  return (
    <div className="space-y-6">
      {/* Search + filter bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative max-w-xs w-full">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search components…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span> components
        </p>
      </div>

      {/* Category filters with counts */}
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150",
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {cat}
            {cat !== "All" && categoryCounts[cat] != null && (
              <span className="ml-1 opacity-50">{categoryCounts[cat]}</span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div ref={gridRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((comp) => (
            <ComponentCard key={comp.href} comp={comp} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-20 text-center text-muted-foreground">
          <svg className="h-12 w-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" />
          </svg>
          <p className="text-sm">No components match &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  )
}
