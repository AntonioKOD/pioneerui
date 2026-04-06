import React, { useId } from "react"
import { cn } from "@/lib/utils"

export interface GridPatternProps extends React.SVGAttributes<SVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: [x: number, y: number][]
  className?: string
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/30 stroke-neutral-400/30 dark:fill-neutral-700/30 dark:stroke-neutral-700/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], idx) => (
            <rect
              strokeWidth="0"
              key={`${squareX}-${squareY}-${idx}`}
              width={width - 1}
              height={height - 1}
              x={squareX * width + 1}
              y={squareY * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export interface GridPatternBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  squares?: [x: number, y: number][]
}

export function GridPatternBackground({
  children,
  className,
  squares,
  ...props
}: GridPatternBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-8",
        className,
      )}
      {...props}
    >
      <GridPattern
        squares={squares}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
