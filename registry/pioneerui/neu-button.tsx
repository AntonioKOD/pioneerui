"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface NeuFollowButtonProps {
  initialFollowState?: boolean
  onFollowChange?: (isFollowing: boolean) => void
  className?: string
  lightShadow?: string
  darkShadow?: string
}

export const NeuFollowButton: React.FC<NeuFollowButtonProps> = ({
  initialFollowState = false,
  onFollowChange,
  className = "",
  lightShadow = "rgba(255, 255, 255, 0.8)",
  darkShadow = "rgba(0, 0, 0, 0.2)",
}) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowState)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
    if (onFollowChange) {
      onFollowChange(!isFollowing)
    }
  }

  return (
    <motion.button
      className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
        isFollowing ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      } ${className}`}
      style={{
        boxShadow: `5px 5px 10px ${darkShadow}, -5px -5px 10px ${lightShadow}`,
      }}
      whileHover={{
        boxShadow: `2px 2px 5px ${darkShadow}, -2px -2px 5px ${lightShadow}`,
      }}
      whileTap={{
        boxShadow: `inset 2px 2px 5px ${darkShadow}, inset -2px -2px 5px ${lightShadow}`,
      }}
      onClick={handleClick}
    >
      <motion.span
        initial={false}
        animate={{ opacity: isFollowing ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        Follow
      </motion.span>
      <motion.span
        initial={false}
        animate={{ opacity: isFollowing ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        Following
      </motion.span>
      <span className="invisible">Follow</span>
    </motion.button>
  )
}

