"use client"

import React, { useRef, useState } from "react"
import { motion, useSpring, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

export interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children?: React.ReactNode
  strength?: number
  radius?: number
}

export function MagneticButton({
  children,
  className,
  strength = 0.4,
  radius = 150,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.5 })
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const dist = Math.sqrt(distX ** 2 + distY ** 2)

    if (dist < radius) {
      x.set(distX * strength)
      y.set(distY * strength)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative cursor-pointer rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-shadow duration-200",
        isHovered && "shadow-lg shadow-primary/30",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
