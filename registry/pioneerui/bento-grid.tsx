import React from "react"
import { cn } from "@/lib/utils"

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  description?: string
  icon?: React.ReactNode
  background?: React.ReactNode
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
  cta?: string
  href?: string
}

export function BentoCard({
  name,
  description,
  icon,
  background,
  className,
  colSpan = 1,
  rowSpan = 1,
  cta,
  href,
  ...props
}: BentoCardProps) {
  const colClass = { 1: "", 2: "sm:col-span-2", 3: "sm:col-span-3" }[colSpan]
  const rowClass = { 1: "", 2: "row-span-2" }[rowSpan]

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card",
        "transition-shadow duration-200 hover:shadow-lg",
        colClass,
        rowClass,
        className,
      )}
      {...props}
    >
      {/* Background slot */}
      {background && (
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80">
          {background}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mt-auto flex flex-col gap-1 p-6">
        {icon && (
          <div className="mb-2 w-fit rounded-lg border bg-background/80 p-2 backdrop-blur-sm text-foreground">
            {icon}
          </div>
        )}
        {name && (
          <h3 className="text-base font-semibold tracking-tight text-foreground">{name}</h3>
        )}
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
        {cta && href && (
          <a
            href={href}
            className="mt-2 w-fit text-xs font-medium text-primary underline-offset-2 hover:underline"
          >
            {cta} →
          </a>
        )}
      </div>
    </div>
  )
}
