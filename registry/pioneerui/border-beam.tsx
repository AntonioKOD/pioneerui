"use client"

import React, { type CSSProperties } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
  reverse?: boolean
  initialOffset?: number
}

export function BorderBeam({
  className,
  size = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  borderWidth = 1.5,
  reverse = false,
  initialOffset = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--border-beam-width": `${borderWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[border:var(--border-beam-width)_solid_transparent]",
        "[mask-clip:padding-box,border-box]",
        "[mask-composite:intersect]",
        "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        className,
      )}
    >
      <motion.div
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          } as any
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initial={{ offsetDistance: `${initialOffset}%` } as any}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        animate={
          {
            offsetDistance: reverse
              ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
              : [`${initialOffset}%`, `${100 + initialOffset}%`],
          } as any
        }
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
        }}
        className="absolute aspect-square"
      />
    </div>
  )
}

export interface BorderBeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  beamProps?: BorderBeamProps
}

export function BorderBeamCard({
  children,
  className,
  beamProps,
  ...props
}: BorderBeamCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-background p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
      <BorderBeam {...beamProps} />
    </div>
  )
}
