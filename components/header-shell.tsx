"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface HeaderShellProps {
  children: React.ReactNode
}

/**
 * Scroll-aware header wrapper — stays Server-Component-friendly because
 * the async star-count fetch lives in SiteHeader (the parent) while this
 * thin client shell just listens to scroll position and shrinks the header.
 */
export function HeaderShell({ children }: HeaderShellProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full border-b border-border backdrop-blur-lg transition-all duration-300",
        scrolled
          ? "h-12 bg-background/80 shadow-sm shadow-black/5"
          : "h-16 bg-background/40",
      )}
    >
      <div
        className={cn(
          "container flex items-center transition-all duration-300",
          scrolled ? "h-12" : "h-16",
        )}
      >
        {children}
      </div>
    </header>
  )
}
