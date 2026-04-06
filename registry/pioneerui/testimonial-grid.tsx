"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface TestimonialGridItem {
  quote: string
  name: string
  role?: string
  company?: string
  avatar?: string
  rating?: number
}

export interface TestimonialGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TestimonialGridItem[]
  columns?: 2 | 3
  animated?: boolean
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={cn("h-3.5 w-3.5", i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted")}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialGrid({
  items,
  columns = 3,
  animated = true,
  className,
  ...props
}: TestimonialGridProps) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  }[columns]

  return (
    <div className={cn("grid gap-4", colClass, className)} {...props}>
      {items.map((item, i) => {
        const card = (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm"
          >
            {item.rating !== undefined && <StarRating rating={item.rating} />}
            <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-2.5 pt-1 border-t border-border/50">
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {item.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold leading-none text-foreground">{item.name}</p>
                {(item.role || item.company) && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.role}
                    {item.role && item.company ? " · " : ""}
                    {item.company}
                  </p>
                )}
              </div>
            </div>
          </div>
        )

        if (!animated) return card

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {card}
          </motion.div>
        )
      })}
    </div>
  )
}
