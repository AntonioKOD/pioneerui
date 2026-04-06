"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { cn } from "@/lib/utils"

export interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  /** Optional suffix like "+", "k", "%" */
  suffix?: string
  /** Optional prefix like "$" */
  prefix?: string
  className?: string
  /** Decimal places (default 0) */
  decimals?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" })
  const count = useMotionValue(from)
  const rounded = useTransform(count, (v) => {
    const fixed = v.toFixed(decimals)
    // Add thousands separator
    const [int, dec] = fixed.split(".")
    const formatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return dec !== undefined ? `${formatted}.${dec}` : formatted
  })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, to, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    })
    return controls.stop
  }, [inView, count, to, duration])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: Array<{
    label: string
    value: number
    prefix?: string
    suffix?: string
    decimals?: number
  }>
}

export function StatCard({ stats, className, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 rounded-2xl border bg-card p-6 shadow-sm sm:grid-cols-4",
        className,
      )}
      {...props}
    >
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center gap-1 text-center">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            <AnimatedCounter
              to={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
          </span>
          <span className="text-xs text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
