"use client"

import React, { useId } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface BeamConfig {
  left: string
  width: number
  duration: number
  delay: number
  repeatDelay: number
  color: string
  opacity: number
  height: string
}

// All random-looking values are pre-computed at module level so they
// are identical on server and client — no hydration mismatch.
const DEFAULT_BEAMS: BeamConfig[] = [
  { left: "8%",  width: 40,  duration: 8,  delay: 0,   repeatDelay: 0.8, color: "#6366f1", opacity: 0.55, height: "60%" },
  { left: "20%", width: 25,  duration: 11, delay: 2.5, repeatDelay: 1.2, color: "#a855f7", opacity: 0.4,  height: "45%" },
  { left: "35%", width: 55,  duration: 7,  delay: 1,   repeatDelay: 0.5, color: "#3b82f6", opacity: 0.45, height: "70%" },
  { left: "50%", width: 30,  duration: 13, delay: 3.5, repeatDelay: 1.8, color: "#ec4899", opacity: 0.35, height: "50%" },
  { left: "62%", width: 50,  duration: 9,  delay: 0.5, repeatDelay: 0.9, color: "#8b5cf6", opacity: 0.5,  height: "65%" },
  { left: "76%", width: 20,  duration: 12, delay: 2,   repeatDelay: 1.5, color: "#06b6d4", opacity: 0.4,  height: "40%" },
  { left: "88%", width: 45,  duration: 6,  delay: 4,   repeatDelay: 0.6, color: "#6366f1", opacity: 0.45, height: "55%" },
]

export interface BeamBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  beams?: Partial<BeamConfig>[]
}

function SingleBeam({ beam, id }: { beam: BeamConfig; id: string }) {
  const gradientId = `beam-grad-${id}`

  return (
    <motion.div
      className="pointer-events-none absolute top-0"
      style={{
        left: beam.left,
        width: beam.width,
        height: beam.height,
        opacity: beam.opacity,
      }}
      initial={{ y: "-110%" }}
      animate={{ y: "110vh" }}
      transition={{
        duration: beam.duration,
        delay: beam.delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: beam.repeatDelay,
      }}
    >
      <svg
        width={beam.width}
        height="100%"
        viewBox={`0 0 ${beam.width} 100`}
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor={beam.color} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width={beam.width}
          height="100"
          fill={`url(#${gradientId})`}
          style={{ filter: `blur(${Math.round(beam.width / 3)}px)` }}
        />
      </svg>
    </motion.div>
  )
}

export function BeamBackground({
  children,
  className,
  beams,
  ...props
}: BeamBackgroundProps) {
  const baseId = useId()
  const resolvedBeams: BeamConfig[] = beams
    ? beams.map((b, i) => ({ ...DEFAULT_BEAMS[i % DEFAULT_BEAMS.length], ...b }))
    : DEFAULT_BEAMS

  return (
    <div
      className={cn(
        "relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-zinc-950",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {resolvedBeams.map((beam, i) => (
          <SingleBeam key={i} beam={beam} id={`${baseId}-${i}`} />
        ))}
      </div>
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
