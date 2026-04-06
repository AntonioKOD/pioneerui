"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface PillNavItem {
  value: string
  label: string
  href?: string
  icon?: React.ReactNode
  badge?: string | number
}

export interface PillNavProps {
  items: PillNavItem[]
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  size?: "sm" | "md" | "lg"
}

export function PillNav({
  items,
  defaultValue,
  onChange,
  className,
  size = "md",
}: PillNavProps) {
  const [active, setActive] = useState(defaultValue ?? items[0]?.value ?? "")

  const sizeClass = {
    sm: "gap-0.5 p-0.5 text-xs",
    md: "gap-1 p-1 text-sm",
    lg: "gap-1.5 p-1.5 text-base",
  }[size]

  const itemSizeClass = {
    sm: "px-2.5 py-1",
    md: "px-3.5 py-1.5",
    lg: "px-5 py-2",
  }[size]

  return (
    <nav
      className={cn(
        "inline-flex items-center rounded-full border bg-muted",
        sizeClass,
        className,
      )}
      aria-label="Navigation"
    >
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => {
            setActive(item.value)
            onChange?.(item.value)
          }}
          className={cn(
            "relative flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
            itemSizeClass,
            active === item.value
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {active === item.value && (
            <motion.span
              layoutId="pill-nav-indicator"
              className="absolute inset-0 rounded-full bg-background shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          {item.icon && <span className="relative z-10">{item.icon}</span>}
          <span className="relative z-10">{item.label}</span>
          {item.badge !== undefined && (
            <span className="relative z-10 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
              {item.badge}
            </span>
          )}
        </button>
      ))}
    </nav>
  )
}
