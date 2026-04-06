"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface FlipCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  /** "hover" flips on mouse enter, "click" flips on click */
  trigger?: "hover" | "click"
  width?: number | string
  height?: number | string
}

export function FlipCard({
  front,
  back,
  className,
  trigger = "hover",
  width = 280,
  height = 340,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  const isFlipped = trigger === "hover" ? flipped : flipped

  const hoverProps =
    trigger === "hover"
      ? {
          onMouseEnter: () => setFlipped(true),
          onMouseLeave: () => setFlipped(false),
        }
      : {
          onClick: () => setFlipped((f) => !f),
        }

  return (
    <div
      className={cn("relative cursor-pointer select-none", className)}
      style={{ width, height, perspective: "1200px" }}
      {...hoverProps}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]"
        >
          {front}
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          {back}
        </div>
      </motion.div>
    </div>
  )
}
