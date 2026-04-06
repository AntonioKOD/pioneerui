import React from "react"
import { cn } from "@/lib/utils"

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  description?: string
  price: string | number
  period?: string
  features: PricingFeature[]
  cta?: string
  onCtaClick?: () => void
  highlighted?: boolean
  badge?: string
}

export function PricingCard({
  name,
  description,
  price,
  period = "/month",
  features,
  cta = "Get started",
  onCtaClick,
  highlighted = false,
  badge,
  className,
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-8",
        highlighted
          ? "border-2 border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20"
          : "border bg-card text-card-foreground",
        className,
      )}
      {...props}
    >
      {badge && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold",
            highlighted
              ? "bg-primary-foreground text-primary"
              : "bg-primary text-primary-foreground",
          )}
        >
          {badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold">{name}</h3>
        {description && (
          <p className={cn("mt-1 text-sm", highlighted ? "text-primary-foreground/70" : "text-muted-foreground")}>
            {description}
          </p>
        )}
      </div>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight">
          {typeof price === "number" ? `$${price}` : price}
        </span>
        {period && (
          <span className={cn("text-sm font-medium", highlighted ? "text-primary-foreground/70" : "text-muted-foreground")}>
            {period}
          </span>
        )}
      </div>

      <button
        onClick={onCtaClick}
        className={cn(
          "mb-8 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
          highlighted
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        )}
      >
        {cta}
      </button>

      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                feature.included
                  ? highlighted
                    ? "text-primary-foreground"
                    : "text-primary"
                  : highlighted
                    ? "text-primary-foreground/30"
                    : "text-muted-foreground/30",
              )}
            >
              {feature.included ? (
                <polyline points="20 6 9 17 4 12" />
              ) : (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              )}
            </svg>
            <span
              className={cn(
                feature.included
                  ? ""
                  : highlighted
                    ? "text-primary-foreground/40 line-through"
                    : "text-muted-foreground/50 line-through",
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
