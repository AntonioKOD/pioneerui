"use client"

import { motion } from "motion/react"
import { CommunityCard, type CommunityComponent } from "./community-card"

interface CommunityGridProps {
  components: CommunityComponent[]
}

export function CommunityGrid({ components }: CommunityGridProps) {
  return (
    <motion.div
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {components.map((comp) => (
        <motion.div
          key={comp.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <CommunityCard component={comp} />
        </motion.div>
      ))}
    </motion.div>
  )
}
