"use client"

import React, { useRef, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  glowColor?: string
  glowSize?: number
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(99,102,241,0.15)",
  glowSize = 300,
  ...props
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ref.current.style.setProperty("--glow-x", `${x}px`)
    ref.current.style.setProperty("--glow-y", `${y}px`)
    ref.current.style.setProperty("--glow-opacity", "1")
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.setProperty("--glow-opacity", "0")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "50%",
          "--glow-opacity": "0",
          "--glow-color": glowColor,
          "--glow-size": `${glowSize}px`,
        } as React.CSSProperties
      }
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-shadow duration-200",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-[radial-gradient(var(--glow-size)_circle_at_var(--glow-x)_var(--glow-y),var(--glow-color),transparent_70%)]",
        "before:opacity-[var(--glow-opacity)] before:transition-opacity before:duration-500",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
