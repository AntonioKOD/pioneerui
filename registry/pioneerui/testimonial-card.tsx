import React from "react"
import { cn } from "@/lib/utils"

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  name: string
  role?: string
  company?: string
  avatar?: string
  rating?: number
  variant?: "default" | "bordered" | "elevated"
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={cn("h-4 w-4", i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted")}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
  rating,
  variant = "default",
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl p-6",
        variant === "default" && "bg-muted/50",
        variant === "bordered" && "border bg-card",
        variant === "elevated" && "bg-card shadow-md",
        className,
      )}
      {...props}
    >
      {rating !== undefined && <StarRating rating={rating} />}
      <blockquote className="text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-auto flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-9 w-9 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          {(role || company) && (
            <p className="text-xs text-muted-foreground">
              {role}
              {role && company && " · "}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
