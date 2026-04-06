"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export interface HeroVideoProps extends React.HTMLAttributes<HTMLDivElement> {
  videoSrc: string
  thumbnailSrc?: string
  thumbnailAlt?: string
  buttonText?: string
  animationStyle?: "from-center" | "from-bottom" | "fade"
}

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-primary"
  >
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
)

export function HeroVideo({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  buttonText = "Watch video",
  animationStyle = "from-center",
  className,
  ...props
}: HeroVideoProps) {
  const [isOpen, setIsOpen] = useState(false)

  const modalVariants = {
    "from-center": {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    "from-bottom": {
      initial: { opacity: 0, y: 80 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 80 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
  }[animationStyle]

  return (
    <>
      <div
        className={cn("relative cursor-pointer overflow-hidden rounded-2xl border bg-muted", className)}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        {thumbnailSrc && (
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="h-full w-full object-cover"
          />
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-200 hover:bg-black/30">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
              <PlayIcon />
            </div>
            {buttonText && (
              <span className="rounded-full bg-background/80 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
                {buttonText}
              </span>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              {...modalVariants}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                onClick={() => setIsOpen(false)}
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="aspect-video">
                <iframe
                  src={videoSrc}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
