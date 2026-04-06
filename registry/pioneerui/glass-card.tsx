"use client"

import React, { useRef, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  /** Show a dynamic glowing orb that follows the mouse */
  glowFollow?: boolean
  /** Border tint color (CSS color) */
  tint?: string
}

export function GlassCard({
  children,
  className,
  glowFollow = true,
  tint = "rgba(139,92,246,0.3)",
  style,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowFollow || !cardRef.current || !glowRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glowRef.current.style.left = `${x}px`
    glowRef.current.style.top = `${y}px`
    glowRef.current.style.opacity = "1"
  }

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0"
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6",
        "border-white/10 bg-white/5 backdrop-blur-md",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
        "transition-shadow duration-300 hover:shadow-lg",
        className,
      )}
      style={
        {
          "--tint": tint,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {/* Mouse-follow glow */}
      {glowFollow && (
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
          style={{
            width: 200,
            height: 200,
            background: `radial-gradient(circle at center, ${tint} 0%, transparent 70%)`,
          }}
        />
      )}
      {/* Shimmer border top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
        style={{
          background: `linear-gradient(90deg, transparent, ${tint}, transparent)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
