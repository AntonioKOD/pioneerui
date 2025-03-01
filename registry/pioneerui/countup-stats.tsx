"use client"

import type React from "react"
import CountUpLib from "react-countup"
import { cn } from "@/lib/utils"

export interface CountUpProps extends React.HTMLAttributes<HTMLDivElement> {
  start?: number
  end: number
  duration?: number
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: string
  decimal?: string
  useEasing?: boolean
  easingFn?: (t: number, b: number, c: number, d: number) => number
  formattingFn?: (value: number) => string
  enableScrollSpy?: boolean
  scrollSpyDelay?: number
  scrollSpyOnce?: boolean
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  variant?: "default" | "success" | "info" | "warning" | "danger"
}

export function CountUp({
  start = 0,
  end,
  duration = 2.5,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  decimal = ".",
  useEasing = true,
  easingFn,
  formattingFn,
  enableScrollSpy = false,
  scrollSpyDelay = 0,
  scrollSpyOnce = true,
  size = "lg",
  variant = "default",
  className,
  ...props
}: CountUpProps) {
  const sizeClasses = {
    sm: "text-lg font-medium",
    md: "text-xl font-medium",
    lg: "text-2xl font-bold",
    xl: "text-3xl font-bold",
    "2xl": "text-4xl font-bold",
  }

  const variantClasses = {
    default: "text-primary",
    success: "text-green-600 dark:text-green-500",
    info: "text-blue-600 dark:text-blue-500",
    warning: "text-amber-600 dark:text-amber-500",
    danger: "text-red-600 dark:text-red-500",
  }

  return (
    <div
      className={cn("flex items-center justify-center", sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      <CountUpLib
        start={start}
        end={end}
        duration={duration}
        delay={delay}
        decimals={decimals}
        prefix={prefix}
        suffix={suffix}
        separator={separator}
        decimal={decimal}
        useEasing={useEasing}
        easingFn={easingFn}
        formattingFn={formattingFn}
        enableScrollSpy={enableScrollSpy}
        scrollSpyDelay={scrollSpyDelay}
        scrollSpyOnce={scrollSpyOnce}
      />
    </div>
  )
}

