"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const STATS: Stat[] = [
  { value: 50,   suffix: "+",  label: "Components",           description: "All animated & accessible" },
  { value: 1,    suffix: "k+", label: "Developers",           description: "Building with PioneerUI"  },
  { value: 100,  suffix: "%",  label: "Free & Open Source",   description: "MIT licensed forever"     },
  { value: 1,    suffix: "",   label: "CLI Command",          description: "To install any component" },
]

const ACCENT_COLORS = [
  { bar: "via-violet-400", suffix: "text-violet-400" },
  { bar: "via-cyan-400",   suffix: "text-cyan-400"   },
  { bar: "via-violet-400", suffix: "text-violet-400" },
  { bar: "via-cyan-400",   suffix: "text-cyan-400"   },
]

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const numRef   = useRef<HTMLSpanElement>(null)
  const itemRef  = useRef<HTMLDivElement>(null)
  const animated = useRef(false)
  const accent   = ACCENT_COLORS[index % ACCENT_COLORS.length]

  useEffect(() => {
    if (!itemRef.current || !numRef.current) return

    ScrollTrigger.create({
      trigger: itemRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (animated.current) return
        animated.current = true

        gsap.fromTo(
          itemRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: index * 0.1, ease: "power2.out" },
        )

        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 1.4,
          delay: index * 0.1 + 0.2,
          ease: "power2.out",
          onUpdate: () => {
            if (numRef.current) {
              numRef.current.textContent = String(
                stat.value >= 10 ? Math.round(obj.val) : Math.round(obj.val * 10) / 10,
              )
            }
          },
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [stat.value, index])

  return (
    <div
      ref={itemRef}
      className="group flex flex-col items-center gap-2 opacity-0"
    >
      {/* Brand accent bar — alternates violet / cyan */}
      <div className={cn("mb-3 h-0.5 w-10 bg-gradient-to-r from-transparent to-transparent", accent.bar)} />
      <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">
        <span ref={numRef}>0</span>
        <span className={accent.suffix}>{stat.suffix}</span>
      </p>
      <p className="text-base font-semibold text-white/90">{stat.label}</p>
      <p className="text-xs text-zinc-500">{stat.description}</p>
    </div>
  )
}

export function StatsBar({ className }: { className?: string }) {
  return (
    <section className={cn("relative overflow-hidden border-t border-zinc-800/50 bg-zinc-950 py-20", className)}>
      {/* Subtle glow behind numbers */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[80px]" />
      <div className="container relative mx-auto">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:divide-x md:divide-zinc-800">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
