"use client"

import React, { useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface RipplePoint {
  id: number
  x: number
  y: number
}

export interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  rippleColor?: string
  variant?: "default" | "outline" | "ghost"
}

const variantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
}

export function RippleButton({
  children,
  className,
  rippleColor = "rgba(255,255,255,0.35)",
  variant = "default",
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<RipplePoint[]>([])
  const btnRef = useRef<HTMLButtonElement>(null)
  const nextId = useRef(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = nextId.current++
    setRipples((prev) => [...prev, { id, x, y }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 700)
    onClick?.(e)
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="pointer-events-none absolute rounded-full"
            style={{
              left: r.x,
              top: r.y,
              x: "-50%",
              y: "-50%",
              background: rippleColor,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
