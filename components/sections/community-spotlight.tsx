"use client"

import Link from "next/link"
import { ArrowRight, Copy, Eye, Plus } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Brand-consistent gradient variants
const G_V = "from-violet-600/45 via-violet-500/20 to-transparent"
const G_C = "from-cyan-600/35 via-cyan-500/18 to-transparent"

// Static placeholder cards — shown before Supabase data loads
const PLACEHOLDER_COMPONENTS = [
  {
    title: "Glassmorphism Card",
    category: "Cards",
    author: { name: "Alex Chen", avatar: "AC", gradient: "from-violet-500 to-purple-600" },
    views: 2341,
    copies: 891,
    gradient: G_V,
  },
  {
    title: "Neon Glow Button",
    category: "Buttons",
    author: { name: "Sarah Kim", avatar: "SK", gradient: "from-cyan-500 to-blue-600" },
    views: 1876,
    copies: 743,
    gradient: G_C,
  },
  {
    title: "Aurora Background",
    category: "Backgrounds",
    author: { name: "Marco D.", avatar: "MD", gradient: "from-violet-500 to-purple-600" },
    views: 3120,
    copies: 1204,
    gradient: G_V,
  },
  {
    title: "Magnetic Hover Effect",
    category: "Effects",
    author: { name: "Priya S.", avatar: "PS", gradient: "from-cyan-500 to-blue-600" },
    views: 1543,
    copies: 612,
    gradient: G_C,
  },
  {
    title: "Typewriter Text",
    category: "Text Effects",
    author: { name: "James Wu", avatar: "JW", gradient: "from-violet-500 to-purple-600" },
    views: 2089,
    copies: 967,
    gradient: G_V,
  },
  {
    title: "Parallax Scroll Card",
    category: "Cards",
    author: { name: "Lucia R.", avatar: "LR", gradient: "from-cyan-500 to-blue-600" },
    views: 1234,
    copies: 489,
    gradient: G_C,
  },
]

function SpotlightCard({ component }: { component: (typeof PLACEHOLDER_COMPONENTS)[number] }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10">
      {/* Preview area */}
      <div
        className={cn(
          "relative h-44 bg-gradient-to-br",
          component.gradient,
        )}
      >
        {/* Soft glow center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-24 rounded-full bg-white/5 blur-2xl" />
        </div>
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        {/* Category badge — brand violet */}
        <div className="absolute right-3 top-3 rounded-full border border-violet-500/30 bg-violet-500/20 px-2.5 py-0.5 text-xs font-medium text-violet-300 backdrop-blur-sm">
          {component.category}
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Author */}
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-xs font-semibold text-white",
              component.author.gradient,
            )}
          >
            {component.author.avatar}
          </div>
          <div>
            <p className="text-sm font-medium leading-tight text-white">{component.title}</p>
            <p className="text-xs text-zinc-500">{component.author.name}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <Eye className="size-3" />
            {component.views.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Copy className="size-3" />
            {component.copies.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export function CommunitySpotlight() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Community
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Made by the community
            </h2>
            <p className="mt-3 max-w-lg text-zinc-400">
              Developers worldwide submit and showcase their animated components. Browse, copy, and
              get inspired.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/submit"
              className={cn(
                buttonVariants({ variant: "default" }),
                "shrink-0 bg-violet-600 hover:bg-violet-500",
              )}
            >
              <Plus className="mr-1.5 size-4" />
              Submit Component
            </Link>
            <Link
              href="/community"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "shrink-0 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white",
              )}
            >
              Browse all
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </div>
        </div>

        {/* Grid with Framer Motion stagger entrance */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {PLACEHOLDER_COMPONENTS.map((c) => (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <SpotlightCard component={c} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
