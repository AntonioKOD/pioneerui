import React, { useId } from "react"
import { cn } from "@/lib/utils"

export interface DotPatternProps extends React.SVGAttributes<SVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  gapX?: number
  gapY?: number
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  gapX,
  gapY,
  ...props
}: DotPatternProps) {
  const id = useId()
  const patternWidth = gapX ? width + gapX : width
  const patternHeight = gapY ? height + gapY : height

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 dark:fill-neutral-600/80",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={patternWidth}
          height={patternHeight}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${x},${y})`}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}

export interface DotPatternBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  dotClassName?: string
  maskClassName?: string
}

export function DotPatternBackground({
  children,
  className,
  dotClassName,
  maskClassName,
  ...props
}: DotPatternBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-8",
        className,
      )}
      {...props}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
          dotClassName,
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
