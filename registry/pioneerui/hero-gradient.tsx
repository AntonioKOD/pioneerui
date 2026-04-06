"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface HeroGradientProps extends React.HTMLAttributes<HTMLElement> {
  headline: string
  subheadline?: string
  cta?: React.ReactNode
  badge?: string
  gradientFrom?: string
  gradientTo?: string
}

export function HeroGradient({
  headline,
  subheadline,
  cta,
  badge,
  className,
  gradientFrom = "from-indigo-500",
  gradientTo = "to-purple-500",
  ...props
}: HeroGradientProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[560px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center",
        className,
      )}
      {...props}
    >
      {/* Radial glow */}
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-20 blur-3xl",
          `bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
        )}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6"
      >
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full border bg-background/80 px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
          >
            <span
              className={cn(
                "mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r",
                gradientFrom,
                gradientTo,
              )}
            />
            {badge}
          </motion.div>
        )}

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {headline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            {subheadline}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {cta}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
