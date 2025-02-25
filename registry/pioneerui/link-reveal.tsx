"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Link {
  text: string
  href: string
  color?: string
}

interface RevealLinksProps {
  links?: Link[]
  className?: string
  style?: React.CSSProperties
  duration?: number
  stagger?: number
  showUnderline?: boolean
  variant?: "slide" | "flip" | "fade" | "perspective" | "split" | "creative"
  direction?: "up" | "down" | "left" | "right"
  textColor?: string
  underlineColor?: string
  underlineHeight?: number
  fontSize?: number
  fontWeight?: string
  letterSpacing?: string
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize"
}

export const RevealLinks: React.FC<RevealLinksProps> = ({
  links = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Projects", href: "#" },
    { text: "Contact", href: "#" },
  ],
  className = "",
  style = {},
  duration = 0.3,
  stagger = 0.02,
  showUnderline = true,
  variant = "slide",
  direction = "up",
  textColor = "currentColor",
  underlineColor = "currentColor",
  underlineHeight = 2,
  fontSize = 16,
  fontWeight = "normal",
  letterSpacing = "normal",
  textTransform = "none",
}) => {
  const getVariants = () => {
    switch (variant) {
      case "flip":
        return {
          initial: { rotateX: 0 },
          hover: { rotateX: 360 },
        }
      case "fade":
        return {
          initial: { opacity: 1 },
          hover: { opacity: 0 },
        }
      case "perspective":
        return {
          initial: { rotateX: 0, y: 0 },
          hover: { rotateX: -90, y: -8 },
        }
      case "split":
        return {
          initial: { letterSpacing: letterSpacing },
          hover: { letterSpacing: "0.5em" },
        }
      case "creative":
        return {
          initial: { scale: 1, rotate: 0 },
          hover: { scale: 1.2, rotate: 5 },
        }
      default: // slide
        return {
          initial: { y: 0 },
          hover: { y: direction === "up" ? "-100%" : "100%" },
        }
    }
  }

  const baseStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    letterSpacing,
    textTransform,
    ...style,
  }

  return (
    <section className={`grid place-content-center gap-6 px-8 py-24 ${className}`}>
      {links.map((link) => (
        <motion.a
          key={link.text}
          href={link.href}
          className="relative block overflow-hidden whitespace-nowrap"
          initial="initial"
          whileHover="hover"
          style={baseStyle}
        >
          <motion.div
            className="relative z-10"
            variants={getVariants()}
            transition={{
              duration,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {link.text.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { opacity: 1 },
                  hover: { opacity: 1 },
                }}
                transition={{
                  duration,
                  delay: stagger * index,
                }}
                style={{ color: textColor }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <div className="absolute inset-0">
            {link.text.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: "100%", opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{
                  duration,
                  delay: stagger * index,
                }}
                className={`inline-block ${link.color ? `bg-gradient-to-r ${link.color} bg-clip-text text-transparent` : ""}`}
                style={{ color: link.color ? undefined : textColor }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {showUnderline && (
            <motion.div
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration }}
              className="absolute bottom-0 left-0 right-0 origin-left"
              style={{
                height: underlineHeight,
                background: link.color ? `linear-gradient(to right, ${link.color})` : underlineColor,
              }}
            />
          )}
        </motion.a>
      ))}
    </section>
  )
}

