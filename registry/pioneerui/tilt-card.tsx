"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  tiltAmount?: number
  glare?: boolean
}

export function TiltCard({
  children,
  className,
  tiltAmount = 10,
  glare = true,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltAmount, -tiltAmount])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltAmount, tiltAmount])

  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"])
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("[perspective:1200px]", className)}
      {...props}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm"
      >
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
            style={{ background: glareBackground }}
          />
        )}
        {children}
      </motion.div>
    </div>
  )
}
