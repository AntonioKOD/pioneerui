"use client"

import React from "react"
import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

export interface TextScrambleProps {
  text: string
  className?: string
  cyclesPerLetter?: number
  shuffleTime?: number
  characters?: string
  hover?: boolean
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

          if (pos / cyclesPerLetter > index) {
            return char
          }

          const randomCharIndex = Math.floor(Math.random() * characters.length)
          const randomChar = characters[randomCharIndex]

          return randomChar
        })
        .join("")

      setDisplayText(scrambled)
      pos++

      if (pos >= text.length * cyclesPerLetter) {
        stopScramble()
      }
    }, shuffleTime)
  }, [text, characters, cyclesPerLetter, preserveSpaces, shuffleTime, stopScramble])

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Update display text when text prop changes
  React.useEffect(() => {
    setDisplayText(text)
  }, [text])

  return (
    <span
      className={cn("inline-block font-mono", className)}
      onMouseEnter={() => hover && scramble()}
      onMouseLeave={() => hover && stopScramble()}
    >
      {displayText}
    </span>
  )
}

