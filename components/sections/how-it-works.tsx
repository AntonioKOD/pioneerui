"use client"

import { Search, Terminal, Paintbrush } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Browse Components",
    description:
      "Explore 50+ animated, accessible components. Filter by category, search by name, and preview live demos instantly.",
    code: "npx shadcn@latest add\n  https://pioneerui.com/r/glow-card",
    iconBg: "from-violet-500 to-purple-600",
    glow: "hover:shadow-violet-500/10",
  },
  {
    number: "02",
    icon: Terminal,
    title: "Install in One Command",
    description:
      "Use the shadcn CLI to copy the component source directly into your project. Zero dependency lock-in.",
    code: "✓ Component installed\n✓ Dependencies updated\n✓ Ready to use",
    iconBg: "from-cyan-500 to-blue-600",
    glow: "hover:shadow-cyan-500/10",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Customize & Ship",
    description:
      "You own the code. Tweak colors, animations, and props to match your design system perfectly.",
    code: "<GlowCard\n  glowColor=\"#6366f1\"\n  className=\"w-full\"\n>\n  {children}\n</GlowCard>",
    iconBg: "from-violet-600 to-cyan-500",
    glow: "hover:shadow-violet-500/20",
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section className={cn("bg-zinc-950 py-24", className)}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            How it works
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From zero to animated in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            PioneerUI is copy-paste first. No wrappers, no themes to configure. Just run the CLI
            command and the component is yours.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Shimmer connector on desktop */}
          <div className="pointer-events-none absolute left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] top-[2.75rem] hidden h-px overflow-hidden md:block">
            <div className="h-full w-full animate-[shimmer-slide_4s_ease-in-out_infinite_alternate] bg-gradient-to-r from-violet-500/40 via-cyan-400/60 to-violet-500/40 bg-[length:200%_100%]" />
          </div>

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={cn(
                  "rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-shadow duration-300 hover:shadow-2xl",
                  step.glow,
                )}
              >
                {/* Step number + icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={cn(
                      "relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                      step.iconBg,
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span className="select-none text-5xl font-black text-zinc-600">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>

                {/* Code snippet */}
                <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                  <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2">
                    <span className="size-2.5 rounded-full bg-red-500/60" />
                    <span className="size-2.5 rounded-full bg-yellow-500/60" />
                    <span className="size-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <pre className="whitespace-pre-wrap px-4 py-3 font-mono text-xs leading-relaxed text-zinc-300">
                    {step.code}
                  </pre>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
