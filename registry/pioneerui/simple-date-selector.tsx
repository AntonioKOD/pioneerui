"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

interface ModernFlipCalendarProps {
  className?: string
}

export const ModernFlipCalendar: React.FC<ModernFlipCalendarProps> = ({ className = "" }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const handleDateChange = (amount: number) => {
    const newDate = new Date(selectedDate)
    newDate.setDate(selectedDate.getDate() + amount)
    setSelectedDate(newDate)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped) {
      setCurrentDate(selectedDate)
    } else {
      setSelectedDate(currentDate)
    }
  }

  return (
    <div className={`bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl shadow-2xl ${className}`}>
      <div className="relative w-full h-64 cursor-pointer perspective-1000" onClick={handleFlip}>
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <CurrentDate key="current" date={currentDate} monthNames={monthNames} dayNames={dayNames} />
          ) : (
            <DateSelector
              key="selector"
              date={selectedDate}
              selectedDate={selectedDate}
              monthNames={monthNames}
              dayNames={dayNames}
              onDateChange={handleDateChange}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleFlip}
          className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
        >
          {isFlipped ? "Set Date" : "Change Date"}
        </button>
      </div>
    </div>
  )
}

interface DateDisplayProps {
  date: Date
  monthNames: string[]
  dayNames: string[]
}

const CurrentDate: React.FC<DateDisplayProps> = ({ date, monthNames, dayNames }) => (
  <motion.div
    initial={{ rotateY: 180 }}
    animate={{ rotateY: 0 }}
    exit={{ rotateY: -180 }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 bg-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg backface-hidden"
  >
    <h2 className="text-4xl font-bold text-purple-700 mb-2">{monthNames[date.getMonth()]}</h2>
    <p className="text-2xl text-indigo-600 mb-4">{dayNames[date.getDay()]}</p>
    <div className="text-6xl font-bold text-purple-800">{date.getDate()}</div>
    <div className="text-3xl text-indigo-600 mt-4">
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </div>
  </motion.div>
)

interface DateSelectorProps extends DateDisplayProps {
  selectedDate: Date
  onDateChange: (amount: number) => void
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, monthNames, dayNames, onDateChange }) => (
  <motion.div
    initial={{ rotateY: -180 }}
    animate={{ rotateY: 0 }}
    exit={{ rotateY: 180 }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 bg-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg backface-hidden"
  >
    <h2 className="text-4xl font-bold text-purple-700 mb-2">{monthNames[selectedDate.getMonth()]}</h2>
    <p className="text-2xl text-indigo-600 mb-4">{dayNames[selectedDate.getDay()]}</p>
    <div className="flex items-center justify-center">
      <button
        onClick={(e) => {
          e.stopPropagation()
          onDateChange(-1)
        }}
        className="text-3xl text-purple-700 mr-4 hover:text-purple-500 transition-colors"
      >
        <FiChevronLeft />
      </button>
      <div className="text-6xl font-bold text-purple-800">{selectedDate.getDate()}</div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onDateChange(1)
        }}
        className="text-3xl text-purple-700 ml-4 hover:text-purple-500 transition-colors"
      >
        <FiChevronRight />
      </button>
    </div>
    <div className="text-xl text-indigo-600 mt-4">{selectedDate.getFullYear()}</div>
  </motion.div>
)

