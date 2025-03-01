"use client"

import { RevealLinks } from "@/registry/pioneerui/link-reveal"
import { motion } from "framer-motion"

interface CreativeDemoProps {
  config: {
    duration: number
    stagger: number
    fontSize: number
    showUnderline: boolean
  }
}

export default function CreativeDemo({ config }: CreativeDemoProps) {
  const links = [
    { text: "Imagine", href: "https://codewithtoni.com", color: "from-blue-500 to-sky-500" },
    { text: "Create", href: "#", color: "from-purple-500 to-pink-500" },
    { text: "Inspire", href: "#", color: "from-orange-500 to-red-500" },
    { text: "Share", href: "#", color: "from-green-500 to-emerald-500" },
  ]

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br p-8">
      {/* Animated shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-8 w-8 rounded-full bg-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <RevealLinks
        links={links}
        variant="perspective"
        duration={0.3}
        stagger={0.02}
        showUnderline={false}
        fontSize={48}
        className="relative z-10"
        fontWeight="bold"
        letterSpacing="0.1em"
        textTransform="uppercase"
      />
    </div>
  )
}
