"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* ─── Inline visual previews — one per component ─────────────────────────── */

function PreviewAurora() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/60 via-cyan-400/30 to-violet-900/80" />
      <div className="absolute -left-8 top-0 h-24 w-48 rounded-full bg-violet-500/40 blur-2xl" />
      <div className="absolute -right-4 bottom-0 h-20 w-40 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(139,92,246,0.25),transparent_60%)]" />
    </div>
  )
}

function PreviewBorderBeam() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-4">
      <div className="relative h-16 w-36 overflow-hidden rounded-xl bg-zinc-900 p-px">
        {/* Spinning conic gradient beam */}
        <div
          className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
          style={{ background: "conic-gradient(from 0deg, transparent 0deg, #8b5cf6 60deg, #06b6d4 120deg, transparent 180deg)" }}
        />
        <div className="relative flex h-full items-center justify-center rounded-[11px] bg-zinc-900">
          <div className="h-1.5 w-16 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}

function PreviewGlowCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="relative h-20 w-36 overflow-hidden rounded-xl border border-violet-500/40 bg-zinc-900 shadow-lg shadow-violet-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.25),transparent_70%)]" />
        <div className="flex h-full flex-col items-center justify-center gap-1.5 p-3">
          <div className="h-2 w-12 rounded-full bg-violet-400/60" />
          <div className="h-1.5 w-16 rounded-full bg-zinc-600" />
          <div className="h-1.5 w-10 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}

function PreviewMarquee() {
  const items = ["Button", "Card", "Tabs", "Modal", "Badge", "Input", "Table"]
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-zinc-950 px-2">
      <div className="flex w-full gap-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex animate-marquee gap-2 whitespace-nowrap" style={{ "--duration": "8s", "--gap": "0.5rem" } as React.CSSProperties}>
          {[...items, ...items].map((item, i) => (
            <span key={i} className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-full gap-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex animate-marquee gap-2 whitespace-nowrap [animation-direction:reverse]" style={{ "--duration": "10s", "--gap": "0.5rem" } as React.CSSProperties}>
          {[...items.slice(3), ...items, ...items.slice(0,3)].map((item, i) => (
            <span key={i} className="rounded-full border border-violet-700/40 bg-violet-900/20 px-2.5 py-1 text-xs text-violet-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewBento() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1.5">
        <div className="col-span-2 row-span-1 rounded-lg border border-zinc-800 bg-zinc-900">
          <div className="flex h-full items-center justify-center gap-1 p-2">
            <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <div className="h-1 flex-1 rounded-full bg-zinc-700" />
          </div>
        </div>
        <div className="col-span-1 row-span-2 rounded-lg border border-cyan-800/40 bg-cyan-900/10">
          <div className="flex h-full flex-col items-center justify-center gap-1 p-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400/60" />
            <div className="h-1 w-8 rounded-full bg-zinc-700" />
            <div className="h-1 w-6 rounded-full bg-zinc-800" />
          </div>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg border border-violet-800/40 bg-violet-900/10">
          <div className="flex h-full items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-violet-400/60" />
          </div>
        </div>
        <div className="col-span-1 row-span-1 rounded-lg border border-zinc-800 bg-zinc-900" />
      </div>
    </div>
  )
}

function PreviewMeteors() {
  const meteors = [
    { top: "10%", left: "20%", delay: "0s",    dur: "1.8s" },
    { top: "30%", left: "55%", delay: "0.4s",  dur: "2.2s" },
    { top: "5%",  left: "70%", delay: "0.9s",  dur: "1.5s" },
    { top: "50%", left: "35%", delay: "1.3s",  dur: "2s"   },
    { top: "20%", left: "85%", delay: "0.2s",  dur: "1.9s" },
  ]
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 to-zinc-950" />
      {meteors.map((m, i) => (
        <span
          key={i}
          className="absolute h-px w-16 animate-meteor bg-gradient-to-r from-white/80 to-transparent shadow-[0_0_4px_1px_rgba(255,255,255,0.4)]"
          style={{ top: m.top, left: m.left, animationDelay: m.delay, animationDuration: m.dur, "--angle": "215deg" } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

function PreviewFluidTabs() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 px-4">
      <div className="w-full">
        <div className="flex w-full gap-0.5 rounded-xl bg-zinc-900 p-1">
          {["Design", "Code", "Preview"].map((tab, i) => (
            <div
              key={tab}
              className={cn(
                "flex-1 rounded-lg py-1.5 text-center text-xs font-medium transition-all",
                i === 0
                  ? "bg-violet-600 text-white shadow-sm shadow-violet-900"
                  : "text-zinc-500 hover:text-zinc-300",
              )}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="mt-2 h-8 rounded-lg border border-zinc-800 bg-zinc-900/50" />
      </div>
    </div>
  )
}

function PreviewPricingCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="w-full rounded-xl border border-violet-500/30 bg-zinc-900 p-3 shadow-lg shadow-violet-500/10">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <div className="h-1.5 w-10 rounded-full bg-zinc-500" />
            <div className="mt-2 flex items-baseline gap-0.5">
              <span className="text-sm font-bold text-white">$12</span>
              <span className="text-xs text-zinc-500">/mo</span>
            </div>
          </div>
          <div className="rounded-full bg-violet-500/20 px-1.5 py-0.5 text-[10px] text-violet-300">Pro</div>
        </div>
        <div className="space-y-1">
          {[10, 14, 12].map((w, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
              <div className={`h-1 rounded-full bg-zinc-700`} style={{ width: `${w * 4}px` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewAnimatedCounter() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-zinc-950">
      <div className="text-4xl font-black tabular-nums text-white">
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          1,234
        </span>
      </div>
      <div className="flex gap-4">
        {["99K+", "50+", "∞"].map((v, i) => (
          <div key={i} className="text-center">
            <div className="text-sm font-bold text-zinc-300">{v}</div>
            <div className="h-0.5 w-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Data ────────────────────────────────────────────────────────────────── */

const FEATURED = [
  { name: "Aurora Background", href: "/docs/components/aurora-background",    category: "Backgrounds",  badge: "Popular", Preview: PreviewAurora         },
  { name: "Border Beam",       href: "/docs/components/border-beam",          category: "Effects",      badge: "New",     Preview: PreviewBorderBeam     },
  { name: "Glow Card",         href: "/docs/components/glow-card",            category: "Cards",        badge: "",        Preview: PreviewGlowCard       },
  { name: "Marquee",           href: "/docs/components/marquee-testimonials", category: "Testimonials", badge: "",        Preview: PreviewMarquee        },
  { name: "Bento Grid",        href: "/docs/components/bento-grid",           category: "Cards",        badge: "New",     Preview: PreviewBento          },
  { name: "Meteors",           href: "/docs/components/meteors",              category: "Effects",      badge: "",        Preview: PreviewMeteors        },
  { name: "Fluid Tabs",        href: "/docs/components/fluid-tabs",           category: "Navigation",   badge: "New",     Preview: PreviewFluidTabs      },
  { name: "Pricing Card",      href: "/docs/components/pricing-card",         category: "Pricing",      badge: "",        Preview: PreviewPricingCard    },
  { name: "Animated Counter",  href: "/docs/components/animated-counter",     category: "Text",         badge: "New",     Preview: PreviewAnimatedCounter},
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function ComponentShowcase() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="size-1.5 rounded-full bg-violet-400" />
            Components
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to ship
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            50+ production-ready components. Backgrounds, cards, effects, navigation, pricing,
            testimonials — all animated, all yours.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FEATURED.map((comp) => (
            <motion.div key={comp.name} variants={cardVariants}>
              <Link
                href={comp.href}
                className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                {/* Corner accents on hover */}
                <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                  <div className="absolute -left-px -top-px h-2.5 w-2.5 bg-violet-400/60" />
                  <div className="absolute -right-px -top-px h-2.5 w-2.5 bg-violet-400/60" />
                  <div className="absolute -left-px -bottom-px h-2.5 w-2.5 bg-violet-400/60" />
                  <div className="absolute -right-px -bottom-px h-2.5 w-2.5 bg-violet-400/60" />
                </div>

                {/* Preview area — component visual */}
                <div className="relative h-36 overflow-hidden">
                  <comp.Preview />
                  {/* Hover overlay tint */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[background:radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                </div>

                {/* Footer */}
                <div className="px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-white">{comp.name}</p>
                      <p className="text-xs text-zinc-400">{comp.category}</p>
                    </div>
                    {comp.badge && (
                      <span className="shrink-0 rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300">
                        {comp.badge}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/docs/components"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-zinc-700 text-zinc-300 hover:border-violet-500/50 hover:bg-zinc-800 hover:text-white",
            )}
          >
            Browse all 50+ components
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
