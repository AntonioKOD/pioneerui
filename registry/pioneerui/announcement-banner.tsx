"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export interface AnnouncementBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string
  href?: string
  cta?: string
  variant?: "default" | "primary" | "warning" | "success"
  dismissible?: boolean
  icon?: React.ReactNode
  onDismiss?: () => void
}

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    className="h-3.5 w-3.5"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export function AnnouncementBanner({
  message,
  href,
  cta,
  variant = "default",
  dismissible = true,
  icon,
  onDismiss,
  className,
  ...props
}: AnnouncementBannerProps) {
  const [visible, setVisible] = useState(true)

  const variantClass = {
    default: "bg-muted border-b text-foreground",
    primary: "bg-primary text-primary-foreground",
    warning: "bg-amber-500 text-white",
    success: "bg-emerald-500 text-white",
  }[variant]

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={cn("w-full overflow-hidden", className)}
        >
          <div className={cn("flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium", variantClass)}>
            {icon && <span className="flex-shrink-0">{icon}</span>}

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <span>{message}</span>
              {href && cta && (
                <a
                  href={href}
                  className="inline-flex items-center gap-1 underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  {cta}
                  <ArrowRight />
                </a>
              )}
            </div>

            {dismissible && (
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="ml-2 flex-shrink-0 rounded p-0.5 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
              >
                <XIcon />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
