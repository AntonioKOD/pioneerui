'use client'

import type React from "react"
import { useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ChevronDown, ChevronUp, GripHorizontal } from "lucide-react"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

interface DraggableGlassNavbarProps {
  items: NavItem[]
  className?: string
}

export const DraggableGlassNavbar: React.FC<DraggableGlassNavbarProps> = ({ items, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useTransform(y, [-100, 0, 100], [0.5, 1, 0.5])

  return (
    <motion.nav
      drag
      dragMomentum={false}
      style={{ x, y, opacity }}
      className={`fixed top-4 left-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${className}`}
    >
      <div className="flex items-center space-x-2">
        <motion.div className="text-white p-2 cursor-move" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <GripHorizontal size={20} />
        </motion.div>
        {items.map((item) => (
          <NavLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle navigation labels"
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </motion.button>
      </div>
      <motion.div
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={{
          expanded: { opacity: 1, height: "auto", marginTop: 8 },
          collapsed: { opacity: 0, height: 0, marginTop: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="flex space-x-2 overflow-hidden"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            variants={{
              expanded: { opacity: 1, y: 0 },
              collapsed: { opacity: 0, y: -10 },
            }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="text-white text-sm"
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  )
}

interface NavLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      className="block p-2 text-white hover:bg-white/20 rounded-full transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={label}
    >
      {icon}
    </motion.a>
  )
}

