"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  variant?: "default" | "gradient" | "striped"
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  variant = "default",
  size = "md",
  animated = true,
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  const sizeClass = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  }[size]

  const fillClass = {
    default: "bg-primary",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    striped:
      "bg-primary bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px)]",
  }[variant]

  return (
    <div className={cn("w-full space-y-1.5", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="font-medium text-foreground">{label}</span>}
          {showValue && (
            <span className="text-muted-foreground">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div
        className={cn("w-full overflow-hidden rounded-full bg-secondary", sizeClass)}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {animated ? (
          <motion.div
            className={cn("h-full rounded-full", fillClass)}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          <div
            className={cn("h-full rounded-full transition-all duration-300", fillClass)}
            style={{ width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  )
}

export interface MultiProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: { value: number; color: string; label?: string }[]
  total?: number
  size?: "sm" | "md" | "lg"
}

export function MultiProgressBar({
  segments,
  total = 100,
  size = "md",
  className,
  ...props
}: MultiProgressBarProps) {
  const sizeClass = { sm: "h-1.5", md: "h-2.5", lg: "h-4" }[size]

  return (
    <div className={cn("w-full space-y-2", className)} {...props}>
      <div className={cn("flex w-full overflow-hidden rounded-full", sizeClass)}>
        {segments.map((seg, i) => (
          <motion.div
            key={i}
            className="h-full first:rounded-l-full last:rounded-r-full"
            style={{ backgroundColor: seg.color }}
            initial={{ width: 0 }}
            animate={{ width: `${(seg.value / total) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
          />
        ))}
      </div>
      {segments.some((s) => s.label) && (
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {segments.map((seg, i) =>
            seg.label ? (
              <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: seg.color }}
                />
                {seg.label}
              </div>
            ) : null,
          )}
        </div>
      )}
    </div>
  )
}
