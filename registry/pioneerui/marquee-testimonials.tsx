"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface MarqueeTestimonialItem {
  quote: string
  name: string
  role?: string
  company?: string
  avatar?: string
}

export interface MarqueeTestimonialsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MarqueeTestimonialItem[]
  speed?: number
  pauseOnHover?: boolean
  reverse?: boolean
  rows?: 1 | 2
}

function TestimonialChip({ item }: { item: MarqueeTestimonialItem }) {
  return (
    <div className="flex w-72 shrink-0 flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
      <p className="line-clamp-3 text-sm leading-relaxed text-foreground">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-2.5">
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
          <p className="text-xs font-semibold text-foreground">{item.name}</p>
          {(item.role || item.company) && (
            <p className="text-xs text-muted-foreground">
              {item.role}
              {item.role && item.company ? " · " : ""}
              {item.company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

interface RowProps {
  items: MarqueeTestimonialItem[]
  duration: string
  reverse?: boolean
  pauseOnHover?: boolean
}

function MarqueeRow({ items, duration, reverse, pauseOnHover }: RowProps) {
  // The `marquee` keyframe translates each child by `calc(-100% - var(--gap))`.
  // Two side-by-side copies each animate in sync — when the first exits left,
  // the second fills in from the right, creating a seamless infinite loop.
  return (
    <div className="group flex overflow-hidden [--gap:1rem]">
      {[0, 1].map((key) => (
        <div
          key={key}
          aria-hidden={key === 1 ? true : undefined}
          className={cn(
            "flex min-w-full shrink-0 gap-4",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{
            animation: `marquee ${duration} linear infinite${reverse ? " reverse" : ""}`,
          }}
        >
          {items.map((item, i) => (
            <TestimonialChip key={i} item={item} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function MarqueeTestimonials({
  items,
  speed = 30,
  pauseOnHover = true,
  reverse = false,
  rows = 1,
  className,
  ...props
}: MarqueeTestimonialsProps) {
  // duration scales with number of items so all widths animate at the same px/s speed
  const duration = `${(items.length * 80) / speed}s`

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex flex-col gap-4">
        <MarqueeRow
          items={items}
          duration={duration}
          reverse={reverse}
          pauseOnHover={pauseOnHover}
        />
        {rows === 2 && (
          <MarqueeRow
            items={items}
            duration={duration}
            reverse={!reverse}
            pauseOnHover={pauseOnHover}
          />
        )}
      </div>
    </div>
  )
}
