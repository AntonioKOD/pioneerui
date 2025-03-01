"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

interface LinkProps {
  heading: string
  subheading: string
  imgSrc: string
  href: string
}

interface UniqueHoverImageLinksProps {
  links: LinkProps[]
  className?: string
}

export const HoverImageLinks: React.FC<UniqueHoverImageLinksProps> = ({ links, className = "" }) => {
  return (
    <section className={`bg-gradient-to-br from-purple-900 to-indigo-900 p-8 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-96 w-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.img
          variants={{
            initial: { scale: 1.5, rotate: "0deg" },
            whileHover: { scale: 1, rotate: "3deg" },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          src={imgSrc}
          alt={`Background for ${heading}`}
          className="h-full w-full object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-75"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        <div
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <motion.h2
            variants={{
              initial: { y: 20, opacity: 0 },
              whileHover: { y: 0, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="text-3xl font-bold mb-2"
          >
            {heading}
          </motion.h2>
          <motion.p
            variants={{
              initial: { y: 20, opacity: 0 },
              whileHover: { y: 0, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
            className="text-lg text-neutral-300"
          >
            {subheading}
          </motion.p>
        </div>
        <motion.a
          href={href}
          variants={{
            initial: { x: -20, opacity: 0 },
            whileHover: { x: 0, opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.2 }}
          className="flex items-center space-x-2 text-lg font-semibold"
          style={{
            transform: "translateZ(75px)",
          }}
        >
          <span>Learn More</span>
          <FiArrowRight />
        </motion.a>
      </div>
    </motion.div>
  )
}

