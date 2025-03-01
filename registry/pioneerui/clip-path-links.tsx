"use client"

import type React from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import type { IconType } from "react-icons"

interface LinkItem {
  name: string
  href: string
  Icon: IconType
  gradient: string
}

interface ModernClipPathLinksProps {
  title?: string
  description?: string
  links: LinkItem[]
}

const ClipPathLinks: React.FC<ModernClipPathLinksProps> = ({
  title = "Connect with Us",
  description = "Explore our presence across various platforms and stay connected with our latest updates, products, and services.",
  links,
}) => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">{title}</h2>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <LinkBox key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  )
}

const LinkBox: React.FC<LinkItem> = ({ Icon, href, gradient, name }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const clipPathControls = useAnimation()

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  const handleMouseEnter = () => {
    clipPathControls.start({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: { duration: 0.4, ease: "easeInOut" },
    })
  }

  const handleMouseLeave = () => {
    clipPathControls.start({
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      transition: { duration: 0.4, ease: "easeInOut" },
    })
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative h-48 w-full rounded-xl bg-gray-800 shadow-lg overflow-hidden cursor-pointer group"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 transition-opacity duration-300 group-hover:opacity-0">
        <Icon className="text-5xl mb-2" />
        <span className="text-lg font-semibold">{name}</span>
      </div>
      <motion.div
        initial={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
        animate={clipPathControls}
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
      >
        <div className="h-full w-full flex flex-col items-center justify-center backdrop-blur-sm">
          <Icon className="text-6xl text-white mb-2" />
          <span className="text-xl font-bold text-white">{name}</span>
        </div>
      </motion.div>
    </motion.a>
  )
}

export default ClipPathLinks

