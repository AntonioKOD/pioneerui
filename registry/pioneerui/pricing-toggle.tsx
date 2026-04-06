"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export interface PricingToggleProps {
  monthlyLabel?: string
  annualLabel?: string
  discount?: string
  onChange?: (isAnnual: boolean) => void
  defaultAnnual?: boolean
  className?: string
}

export function PricingToggle({
  monthlyLabel = "Monthly",
  annualLabel = "Annual",
  discount = "Save 20%",
  onChange,
  defaultAnnual = false,
  className,
}: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(defaultAnnual)

  const toggle = (annual: boolean) => {
    setIsAnnual(annual)
    onChange?.(annual)
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <button
        onClick={() => toggle(false)}
        className={cn(
          "text-sm font-medium transition-colors duration-150",
          !isAnnual ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {monthlyLabel}
      </button>

      <button
        role="switch"
        aria-checked={isAnnual}
        onClick={() => toggle(!isAnnual)}
        className={cn(
          "relative h-6 w-11 rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isAnnual ? "bg-primary" : "bg-input",
        )}
      >
        <motion.span
          className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm"
          animate={{ x: isAnnual ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ position: "absolute", top: 2 }}
        />
      </button>

      <button
        onClick={() => toggle(true)}
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium transition-colors duration-150",
          isAnnual ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {annualLabel}
        {discount && (
          <AnimatePresence>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400"
              >
                {discount}
              </motion.span>
            )}
          </AnimatePresence>
        )}
      </button>
    </div>
  )
}

export interface AnimatedPriceProps {
  monthly: string | number
  annual: string | number
  isAnnual: boolean
  currency?: string
  period?: boolean
}

export function AnimatedPrice({
  monthly,
  annual,
  isAnnual,
  currency = "$",
  period = true,
}: AnimatedPriceProps) {
  const current = isAnnual ? annual : monthly

  return (
    <div className="flex items-baseline gap-1">
      <span className="text-sm font-medium text-muted-foreground">{currency}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={String(current)}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="text-4xl font-extrabold tracking-tight text-foreground"
        >
          {current}
        </motion.span>
      </AnimatePresence>
      {period && (
        <span className="text-sm font-medium text-muted-foreground">
          /{isAnnual ? "yr" : "mo"}
        </span>
      )}
    </div>
  )
}
