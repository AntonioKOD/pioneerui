"use client"

import React, { type CSSProperties } from "react"
import { cn } from "@/lib/utils"

type NeonColor = "purple" | "cyan" | "green" | "pink" | "orange"

const colorMap: Record<NeonColor, { glow: string; border: string; text: string; shadow: string }> = {
  purple: {
    glow: "rgba(168,85,247,0.5)",
    border: "#a855f7",
    text: "#a855f7",
    shadow: "0 0 5px #a855f7, 0 0 20px #a855f7, 0 0 40px #7c3aed",
  },
  cyan: {
    glow: "rgba(6,182,212,0.5)",
    border: "#06b6d4",
    text: "#06b6d4",
    shadow: "0 0 5px #06b6d4, 0 0 20px #06b6d4, 0 0 40px #0891b2",
  },
  green: {
    glow: "rgba(34,197,94,0.5)",
    border: "#22c55e",
    text: "#22c55e",
    shadow: "0 0 5px #22c55e, 0 0 20px #22c55e, 0 0 40px #16a34a",
  },
  pink: {
    glow: "rgba(236,72,153,0.5)",
    border: "#ec4899",
    text: "#ec4899",
    shadow: "0 0 5px #ec4899, 0 0 20px #ec4899, 0 0 40px #db2777",
  },
  orange: {
    glow: "rgba(249,115,22,0.5)",
    border: "#f97316",
    text: "#f97316",
    shadow: "0 0 5px #f97316, 0 0 20px #f97316, 0 0 40px #ea580c",
  },
}

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: NeonColor
  size?: "sm" | "md" | "lg"
  children?: React.ReactNode
}

const sizeClasses = {
  sm: "px-5 py-2 text-xs tracking-widest",
  md: "px-8 py-3 text-sm tracking-widest",
  lg: "px-10 py-4 text-base tracking-widest",
}

export function NeonButton({
  color = "purple",
  size = "md",
  className,
  children,
  style,
  ...props
}: NeonButtonProps) {
  const c = colorMap[color]

  return (
    <button
      className={cn(
        "group relative cursor-pointer rounded border bg-transparent font-mono font-bold uppercase transition-all duration-300",
        "hover:bg-current/5 hover:text-white",
        sizeClasses[size],
        className,
      )}
      style={
        {
          color: c.text,
          borderColor: c.border,
          "--neon-shadow": c.shadow,
          "--neon-glow": c.glow,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {/* Top-left corner accent */}
      <span
        className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 transition-all duration-300 group-hover:h-full group-hover:w-full"
        style={{ borderColor: c.border }}
      />
      {/* Bottom-right corner accent */}
      <span
        className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 transition-all duration-300 group-hover:h-full group-hover:w-full"
        style={{ borderColor: c.border }}
      />
      <span
        className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]"
        style={
          {
            textShadow: "none",
          } as CSSProperties
        }
      >
        {children}
      </span>
    </button>
  )
}
