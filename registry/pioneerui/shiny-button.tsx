"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface ShinyButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className = "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={`relative px-6 py-3 rounded-full bg-white text-black font-semibold border border-black overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isHovered ? { x: "100%", opacity: 0.5 } : { x: "-100%", opacity: 0 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
      />
    </motion.button>
  )
}

