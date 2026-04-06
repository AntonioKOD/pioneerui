"use client"

import React, { type CSSProperties } from "react"
import { cn } from "@/lib/utils"

export interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #818cf8 30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)",
          } as CSSProperties
        }
      >
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform dark:invert-0",
            "[background-image:var(--white-gradient),var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-attachment:fixed]",
            "animate-aurora",
            "after:absolute after:inset-0",
            "after:[background-image:var(--white-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora",
            "after:[background-attachment:fixed]",
            "after:mix-blend-difference",
            "after:content-['']",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
          )}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
