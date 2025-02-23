"use client"

import type React from "react"
import { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { FiBatteryCharging, FiWifi } from "react-icons/fi"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FloatingPhoneProps {
  gradientStart?: string
  gradientEnd?: string
  textColor?: string
  content?: React.ReactNode
  actionText?: string
  actionLink?: string
  showStatusBar?: boolean
  logo?: React.ReactNode
  title?: string
}

export type IconProps = React.SVGProps<SVGSVGElement>;


const DefaultLogo = ({ className, ...props }: IconProps) => (
      <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6",  className)}
    >
      {/* Background with purple and gold gradient */}
      <rect width="256" height="256" rx="64" fill="url(#purple-gold)" />
  
      {/* Overlay texture */}
      <rect width="256" height="256" rx="64" fill="url(#texture)" fillOpacity="0.1" />
  
      {/* Main Logo Elements */}
      <g filter="url(#glow)">
        {/* Compass Star */}
        <path d="M128 48L144 80L176 96L144 112L128 144L112 112L80 96L112 80L128 48Z" fill="white" />
  
        {/* Direction Lines */}
        <path d="M128 144L128 208M80 96L32 96M176 96L224 96" stroke="white" strokeWidth="8" strokeLinecap="round" />
  
        {/* Small Stars */}
        <circle cx="32" cy="96" r="8" fill="white" />
        <circle cx="224" cy="96" r="8" fill="white" />
        <circle cx="128" cy="208" r="8" fill="white" />
  
        {/* Decorative Arc */}
        <path
          d="M48 160C48 160 88 192 128 192C168 192 208 160 208 160"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
  
      {/* Gradients and Effects */}
      <defs>
        <linearGradient id="purple-gold" x1="0" y1="0" x2="256" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" /> {/* Deep Purple */}
          <stop offset="50%" stopColor="#9333EA" /> {/* Rich Purple */}
          <stop offset="100%" stopColor="#F59E0B" /> {/* Warm Gold */}
        </linearGradient>
  
        <linearGradient id="texture" x1="128" y1="0" x2="128" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
  
        <filter
          id="glow"
          x="-4"
          y="-4"
          width="264"
          height="264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect" />
          <feBlend in="SourceGraphic" in2="effect" result="shape" />
        </filter>
      </defs>
    </svg>
    
)

export const FloatingPhone: React.FC<FloatingPhoneProps> = ({
  gradientStart = "#4F46E5",
  gradientEnd = "#9333EA",
  textColor = "#ffffff",
  content,
  actionText = "Explore Now",
  actionLink = "#",
  showStatusBar = true,
  logo,
  title = "PioneerUI",
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  const springConfig = { damping: 20, stiffness: 300 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left - rect.width / 2)
    mouseY.set(event.clientY - rect.top - rect.height / 2)
  }

  return (
    <div
      className="relative perspective-1000 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Phone Body */}
        <motion.div
          className="relative h-[600px] w-[300px] rounded-[50px] p-1"
          style={{
            background: `linear-gradient(145deg, ${gradientStart}, ${gradientEnd})`,
            boxShadow: `0 0 30px rgba(0, 0, 0, 0.3), 
                      inset 0 0 20px rgba(255, 255, 255, 0.5)`,
          }}
          initial={{ y: 0 }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          {/* Glass Effect */}
          <div
            className="absolute inset-0 rounded-[48px] overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${gradientEnd}22, ${gradientStart}22)`,
              backdropFilter: "blur(10px)",
            }}
          />

          {/* Status Bar */}
          {showStatusBar && (
            <>
              <div className="absolute left-[50%] top-4 z-10 h-2 w-20 -translate-x-[50%] rounded-full bg-black/20 backdrop-blur-md" />
              <div className="absolute right-8 top-4 z-10 flex gap-2">
                <FiWifi/>
                <FiBatteryCharging  />
              </div>
            </>
          )}

          {/* Screen Content */}
          <div className="relative z-0 h-[calc(100%-8px)] w-[calc(100%-8px)] overflow-hidden rounded-[44px] bg-black/90 m-1">
            {content ? (
              <div className="h-full w-full">{content}</div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center">
                {logo || <DefaultLogo color={textColor} />}
                <div className="text-2xl font-bold" style={{ color: textColor }}>
                  {title}
                </div>
              </div>
            )}

            {/* Action Button */}
            <Link href={actionLink} className="absolute bottom-12 left-8 right-8 block">
              <motion.div
                className="rounded-2xl py-4 text-lg font-medium backdrop-blur-sm text-center"
                style={{
                  background: `linear-gradient(135deg, ${gradientStart}66, ${gradientEnd}66)`,
                  color: textColor,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {actionText}
              </motion.div>
            </Link>

            {/* Gradient Effects */}
            <div
              className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${gradientStart}33, ${gradientEnd}00)` }}
            />
            <div
              className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${gradientEnd}33, ${gradientStart}00)` }}
            />
          </div>

          {/* Bottom Line */}
          <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20" />
        </motion.div>
      </motion.div>
    </div>
  )
}

