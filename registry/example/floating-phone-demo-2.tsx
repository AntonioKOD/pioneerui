"use client"

import { FloatingPhone } from "@/registry/pioneerui/floating-phone"
import { motion } from "framer-motion"
import { Cloud, Sun, Droplets, Wind } from 'lucide-react'

const WeatherContent = () => {
  return (
    <div className="flex flex-col h-full w-full p-6 text-white bg-gradient-to-br from-sky-400 to-blue-600">
      {/* Current Weather */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-4 ">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sun className="w-20 h-20 text-yellow-300" />
          </motion.div>
        </div>
        <h1 className="text-5xl font-bold mb-2">24°</h1>
        <p className="text-xl">Partly Cloudy</p>
      </motion.div>

      {/* Weather Details */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <WeatherDetail icon={Wind} label="Wind" value="12 km/h" />
        <WeatherDetail icon={Droplets} label="Humidity" value="64%" />
        <WeatherDetail icon={Sun} label="UV Index" value="6/10" />
        <WeatherDetail icon={Cloud} label="Cloud Cover" value="25%" />
      </motion.div>

      {/* Hourly Forecast */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white/10 rounded-xl p-4"
      >
        <h3 className="text-lg font-semibold mb-4">Hourly Forecast</h3>
        <div className="flex justify-between">
          {[
            { time: "Now", temp: "24°", icon: Sun },
            { time: "2PM", temp: "26°", icon: Sun },
            { time: "3PM", temp: "25°", icon: Cloud },
            { time: "4PM", temp: "23°", icon: Cloud },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-sm mb-2">{item.time}</p>
              <item.icon className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">{item.temp}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const WeatherDetail = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
    <Icon className="w-6 h-6" />
    <div>
      <p className="text-sm text-white/80">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
)

export default function WeatherDemo() {
  return (
    <FloatingPhone
      gradientStart="#0EA5E9"
      gradientEnd="#2563EB"
      textColor="#ffffff"
      content={<WeatherContent />}
      actionText="Open Weather"
      actionLink="/weather"
      showStatusBar={true}
    />
  )
}
