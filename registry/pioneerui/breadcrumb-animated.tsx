"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbAnimatedProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  maxVisible?: number
}

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 text-muted-foreground/50"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export function BreadcrumbAnimated({
  items,
  separator = <ChevronRight />,
  maxVisible,
  className,
  ...props
}: BreadcrumbAnimatedProps) {
  const visible = maxVisible ? items.slice(-maxVisible) : items
  const hidden = maxVisible && items.length > maxVisible

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center", className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1">
        {hidden && (
          <>
            <li className="flex items-center gap-1">
              <span className="cursor-default rounded px-1 text-sm font-medium text-muted-foreground select-none">
                &hellip;
              </span>
            </li>
            <li className="flex items-center">{separator}</li>
          </>
        )}
        {visible.map((item, i) => {
          const isLast = i === visible.length - 1
          return (
            <React.Fragment key={i}>
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="flex items-center"
              >
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 rounded px-1 py-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.icon && <span className="opacity-70">{item.icon}</span>}
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-1 px-1 py-0.5 text-sm font-medium",
                      isLast ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.icon && <span className="opacity-70">{item.icon}</span>}
                    {item.label}
                  </span>
                )}
              </motion.li>
              {!isLast && (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.05 + 0.1 }}
                  className="flex items-center"
                  aria-hidden="true"
                >
                  {separator}
                </motion.li>
              )}
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
