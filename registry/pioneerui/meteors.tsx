"use client"

import React, { useEffect, useState, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface MeteorStyle extends CSSProperties {
  "--angle": string
}

export interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([])

  useEffect(() => {
    const styles: MeteorStyle[] = Array.from({ length: number }, () => ({
      "--angle": "215deg",
      top: "-5%",
      left: `${Math.floor(Math.random() * 800) - 200}px`,
      animationDelay: `${(Math.random() * 0.9 + 0.2).toFixed(2)}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 4)}s`,
    }))
    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute h-0.5 w-0.5 rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff20] dark:bg-zinc-300",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[60px]",
            "before:-translate-y-1/2 before:translate-x-[1px]",
            "before:bg-gradient-to-r before:from-zinc-500 before:to-transparent before:content-[''] dark:before:from-zinc-300",
            className,
          )}
        />
      ))}
    </>
  )
}

export interface MeteorsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  meteorCount?: number
}

export function MeteorsCard({
  children,
  className,
  meteorCount = 20,
  ...props
}: MeteorsCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
      {...props}
    >
      <Meteors number={meteorCount} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
