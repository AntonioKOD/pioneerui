"use client"

import React, { useState, useRef } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface FluidTabItem {
  value: string
  label: string
  content?: React.ReactNode
  icon?: React.ReactNode
}

export interface FluidTabsProps {
  tabs: FluidTabItem[]
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  listClassName?: string
  contentClassName?: string
  variant?: "underline" | "pill"
}

export function FluidTabs({
  tabs,
  defaultValue,
  onChange,
  className,
  listClassName,
  contentClassName,
  variant = "underline",
}: FluidTabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value ?? "")

  const handleChange = (value: string) => {
    setActive(value)
    onChange?.(value)
  }

  const activeTab = tabs.find((t) => t.value === active)

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div
        role="tablist"
        className={cn(
          "relative flex",
          variant === "underline"
            ? "border-b border-border gap-1"
            : "rounded-xl bg-muted p-1 gap-1",
          listClassName,
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => handleChange(tab.value)}
            className={cn(
              "relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none",
              variant === "underline"
                ? cn(
                    "rounded-t-md",
                    active === tab.value
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                : cn(
                    "rounded-lg z-10",
                    active === tab.value ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  ),
            )}
          >
            {/* Underline indicator */}
            {variant === "underline" && active === tab.value && (
              <motion.span
                layoutId="fluid-tab-underline"
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            {/* Pill indicator */}
            {variant === "pill" && active === tab.value && (
              <motion.span
                layoutId="fluid-tab-pill"
                className="absolute inset-0 rounded-lg bg-background shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            {tab.icon && <span className="relative z-10">{tab.icon}</span>}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab?.content && (
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          role="tabpanel"
          className={cn("mt-4", contentClassName)}
        >
          {activeTab.content}
        </motion.div>
      )}
    </div>
  )
}
