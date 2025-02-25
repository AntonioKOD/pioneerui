"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavItem {
  name: string
  href: string
}

interface SideStaggerNavProps {
  items: NavItem[]
}

export const SideStaggerNav: React.FC<SideStaggerNavProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 p-2 text-white bg-neutral-800 rounded-lg shadow-lg hover:bg-neutral-700 transition-colors"
        aria-label="Open navigation"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-neutral-900 z-50 shadow-xl p-8"
            >
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Close navigation"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mt-12">
                {items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <a
                      href={item.href}
                      className="block py-4 text-lg text-neutral-400 hover:text-white transition-colors relative"
                    >
                      {item.name}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-[1px] bg-neutral-800" />
                      {hoveredItem === item.name && (
                        <motion.div
                          layoutId="hoverLine"
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-[1px] bg-white"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          style={{ originX: 1 }}
                        />
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

