"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

export interface TypewriterProps {
  text: string | string[]
  className?: string
  speed?: number
  delay?: number
  cursor?: boolean
  cursorStyle?: string
  cursorBlinkSpeed?: number
  deleteSpeed?: number
  deleteDelay?: number
  loop?: boolean
  onComplete?: () => void
  onLoop?: () => void
  typingStyle?: "mechanical" | "natural"
}

export function Typewriter({
  text,
  className,
  speed = 50,
  delay = 1000,
  cursor = true,
  cursorStyle = "|",
  cursorBlinkSpeed = 500,
  deleteSpeed = 25,
  deleteDelay = 2000,
  loop = false,
  onComplete,
  onLoop,
  typingStyle = "mechanical",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = Array.isArray(text) ? text : [text]

  const getNaturalDelay = useCallback(() => {
    if (typingStyle === "mechanical") return speed
    // Random delay between 20ms and 100ms for more natural typing
    return Math.random() * 80 + 20
  }, [speed, typingStyle])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      const currentText = texts[currentTextIndex]

      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
          timeout = setTimeout(type, getNaturalDelay())
        } else if (loop || currentTextIndex < texts.length - 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true)
            type()
          }, deleteDelay)
        } else {
          onComplete?.()
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1))
          setCurrentIndex((prev) => prev - 1)
          timeout = setTimeout(type, deleteSpeed)
        } else {
          setIsDeleting(false)
          if (currentTextIndex < texts.length - 1) {
            setCurrentTextIndex((prev) => prev + 1)
          } else if (loop) {
            setCurrentTextIndex(0)
            onLoop?.()
          }
          timeout = setTimeout(type, delay)
        }
      }
    }

    timeout = setTimeout(type, delay)

    return () => clearTimeout(timeout)
  }, [
    currentIndex,
    currentTextIndex,
    texts,
    isDeleting,
    delay,
    deleteDelay,
    deleteSpeed,
    loop,
    onComplete,
    onLoop,
    getNaturalDelay,
  ])

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor) return

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, cursorBlinkSpeed)

    return () => clearInterval(interval)
  }, [cursor, cursorBlinkSpeed])

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {cursor && cursorVisible && <span className="opacity-100">{cursorStyle}</span>}
    </span>
  )
}

