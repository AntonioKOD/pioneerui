import React from "react"
import { cn } from "@/lib/utils"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  highlighted?: boolean
}

export function FeatureCard({
  icon,
  title,
  description,
  highlighted = false,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border p-6 transition-all duration-200",
        "hover:shadow-md hover:-translate-y-0.5",
        highlighted
          ? "border-primary/50 bg-primary/5 shadow-sm shadow-primary/10"
          : "border-border bg-card",
        className,
      )}
      {...props}
    >
      {highlighted && (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),transparent_70%)]" />
      )}
      {icon && (
        <div
          className={cn(
            "mb-4 inline-flex items-center justify-center rounded-lg p-2.5",
            highlighted
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200",
          )}
        >
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ children, className, columns = 3, ...props }: FeatureGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns]

  return (
    <div className={cn("grid grid-cols-1 gap-4", colClass, className)} {...props}>
      {children}
    </div>
  )
}
