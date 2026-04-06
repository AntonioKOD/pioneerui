import React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  size?: number
  color?: string
}

export function SpinnerRing({ size = 24, className, ...props }: SpinnerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className={cn("animate-spin", className)}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

export function SpinnerDots({ size = 40, className, ...props }: SpinnerProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-1", className)}
      aria-label="Loading"
      style={{ width: size, height: size / 2 }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="rounded-full bg-current"
          style={{
            width: size / 6,
            height: size / 6,
            animation: "spinner-dots 1.2s infinite ease-in-out",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes spinner-dots {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export function SpinnerPulse({ size = 32, className, ...props }: SpinnerProps) {
  return (
    <span
      className={cn("inline-block rounded-full bg-current", className)}
      style={{
        width: size,
        height: size,
        animation: "spinner-pulse 1.2s cubic-bezier(0, 0, 0.2, 1) infinite",
      }}
      aria-label="Loading"
    >
      <style>{`
        @keyframes spinner-pulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.8; }
        }
      `}</style>
    </span>
  )
}

export function SpinnerBars({ size = 32, className }: SpinnerProps) {
  return (
    <div
      className={cn("flex items-end justify-center gap-[3px]", className)}
      aria-label="Loading"
      style={{ width: size, height: size }}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[20%] rounded-sm bg-current"
          style={{
            height: "100%",
            animation: "spinner-bars 1s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes spinner-bars {
          0%, 40%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          20% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
