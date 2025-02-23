"use client"

import { FloatingPhone } from "@/registry/pioneerui/floating-phone"
import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from "lucide-react"
import { useState } from "react"

const MusicContent = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex flex-col h-full w-full p-6 text-white bg-gradient-to-br from-violet-600/90 to-indigo-900/90">
      {/* Album Art */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-square w-full max-w-[280px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-indigo-600/20 backdrop-blur-sm" />
        <img src="/placeholder.svg?height=280&width=280" alt="Album artwork" className="w-full h-full object-cover" />
      </motion.div>

      {/* Track Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold mb-2">Cosmic Dreams</h2>
        <p className="text-violet-200/80">Stellar Soundscapes</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/20 rounded-full mb-2">
        <motion.div
          className="h-full bg-violet-400 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "65%" }}
          transition={{ duration: 2, ease: "linear" }}
        />
      </div>
      <div className="flex justify-between text-sm mb-6">
        <span>2:14</span>
        <span>3:45</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Shuffle className="w-5 h-5 text-violet-200/80" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <SkipBack className="w-6 h-6" />
        </motion.button>
        <motion.button
          className="bg-white rounded-full p-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-6 h-6 text-violet-600" /> : <Play className="w-6 h-6 text-violet-600" />}
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <SkipForward className="w-6 h-6" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Repeat className="w-5 h-5 text-violet-200/80" />
        </motion.button>
      </div>
    </div>
  )
}

export default function MusicPlayerDemo() {
  return (
    <FloatingPhone
      gradientStart="#7C3AED"
      gradientEnd="#3730A3"
      textColor="#ffffff"
      content={<MusicContent />}
      actionText="Open Music App"
      actionLink="/music"
      showStatusBar={true}
    />
  )
}

