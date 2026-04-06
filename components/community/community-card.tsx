"use client"

import Link from "next/link"
import { Eye, Heart, Copy, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CommunityComponent {
  id: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  status: "pending" | "approved" | "featured" | "changes_requested" | "rejected"
  featured: boolean
  view_count: number
  copy_count: number
  save_count: number
  created_at: string
  author: {
    id: string
    username: string
    name: string | null
    avatar_url: string | null
  }
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  button:     "from-violet-600/30 via-purple-500/20 to-pink-600/30",
  card:       "from-cyan-600/30 via-blue-500/20 to-indigo-600/30",
  background: "from-green-600/30 via-emerald-500/20 to-teal-600/30",
  effect:     "from-orange-600/30 via-amber-500/20 to-yellow-600/30",
  navigation: "from-rose-600/30 via-pink-500/20 to-fuchsia-600/30",
  form:       "from-indigo-600/30 via-violet-500/20 to-purple-600/30",
  text:       "from-teal-600/30 via-cyan-500/20 to-blue-600/30",
  loader:     "from-amber-600/30 via-orange-500/20 to-red-600/30",
}

// Per-category hover glow shadows — PioneerUI branded
const CATEGORY_GLOW: Record<string, string> = {
  button:     "hover:shadow-violet-500/10",
  card:       "hover:shadow-cyan-500/10",
  background: "hover:shadow-emerald-500/10",
  effect:     "hover:shadow-orange-500/10",
  navigation: "hover:shadow-rose-500/10",
  form:       "hover:shadow-indigo-500/10",
  text:       "hover:shadow-teal-500/10",
  loader:     "hover:shadow-amber-500/10",
}

export function CommunityCard({ component }: { component: CommunityComponent }) {
  const cat = component.category.toLowerCase()
  const gradient = CATEGORY_GRADIENTS[cat] ?? "from-zinc-600/30 via-zinc-500/20 to-zinc-400/30"
  const glow = CATEGORY_GLOW[cat] ?? "hover:shadow-black/10"

  return (
    <Link
      href={`/community/${component.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        glow,
      )}
    >
      {/* Preview area */}
      <div
        className={cn(
          "relative h-44 bg-gradient-to-br",
          gradient,
          "flex items-center justify-center",
        )}
      >
        <span className="text-sm font-medium text-foreground/60">{component.title}</span>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-full border border-border/50 bg-background/80 px-2 py-0.5 text-xs text-muted-foreground backdrop-blur-sm">
            {component.category}
          </span>
          {component.featured && (
            <span className="rounded-full bg-violet-500/90 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        {/* View hint on hover — slides in from right */}
        <div className="absolute bottom-3 right-3 flex translate-x-1 items-center gap-1 rounded-lg bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
          <ChevronRight className="size-3" />
          View
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        <div>
          <h3 className="font-semibold text-foreground">{component.title}</h3>
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {component.description}
          </p>
        </div>

        {/* Tags */}
        {component.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {component.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author + stats */}
        <div className="mt-auto flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-2">
            {component.author.avatar_url ? (
              <img
                src={component.author.avatar_url}
                alt={component.author.username}
                className="size-6 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-6 items-center justify-center rounded-full bg-violet-500/20 text-[10px] font-bold text-violet-400">
                {component.author.username.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-xs text-muted-foreground">{component.author.username}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="size-3" />
              {component.view_count.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Copy className="size-3" />
              {component.copy_count.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="size-3" />
              {component.save_count.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
