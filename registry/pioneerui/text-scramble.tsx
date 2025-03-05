"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

export interface TextScrambleProps {
  text: string
  className?: string
  cyclesPerLetter?: number
  shuffleTime?: number
  characters?: string
  hover?: boolean
  auto?: boolean
  preserveSpaces?: boolean
  onComplete?: () => void
}

export function TextScramble({
  text,
  className,
  cyclesPerLetter = 2,
  shuffleTime = 50,
  characters = "!@#$%^&*():{};|,.<>/?",
  hover = false,
  auto = false,
  preserveSpaces = true,
  onComplete,
}: TextScrambleProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [displayText, setDisplayText] = useState(text)
  const isScrambling = useRef(false)

  const stopScramble = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setDisplayText(text)
    isScrambling.current = false
    onComplete?.()
  }, [text, onComplete])

  const scramble = useCallback(() => {
    if (isScrambling.current) return

    isScrambling.current = true
    let pos = 0

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (preserveSpaces && char === " ") {
            return " "
          }

          // Once enough cycles have passed for a character, show the original
          if (pos / cyclesPerLetter > index) {
            return char
          }

          // Otherwise, use a random character from the given set
          const randomCharIndex = Math.floor(Math.random() * characters.length)
          return characters[randomCharIndex]
        })
        .join("")

      setDisplayText(scrambled)
      pos++

      if (pos >= text.length * cyclesPerLetter) {
        stopScramble()
      }
    }, shuffleTime)
  }, [text, characters, cyclesPerLetter, preserveSpaces, shuffleTime, stopScramble])

  // Auto trigger scramble on mount if auto prop is true
  useEffect(() => {
    if (auto) {
      scramble()
    }
  }, [auto, scramble])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Update display text when text prop changes
  useEffect(() => {
    setDisplayText(text)
  }, [text])

  return (
    <span
      className={cn("inline-block font-mono", className)}
      // Only attach hover events if hover prop is true
      {...(hover
        ? {
            onMouseEnter: scramble,
            onMouseLeave: stopScramble,
          }
        : {})}
    >
      {displayText}
    </span>
  )
}