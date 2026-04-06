import React, { useId } from "react"
import { cn } from "@/lib/utils"

export interface NoiseTextureProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  opacity?: number
  baseFrequency?: number
  numOctaves?: number
}

export function NoiseTexture({
  children,
  className,
  opacity = 0.15,
  baseFrequency = 0.65,
  numOctaves = 3,
  ...props
}: NoiseTextureProps) {
  const id = useId()
  const filterId = `noise-${id.replace(/:/g, "")}`

  return (
    <div
      className={cn(
        "relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-background",
        className,
      )}
      {...props}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
          style={{ opacity }}
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
