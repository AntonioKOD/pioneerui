"use client"

import { FloatingPhone } from "@/registry/pioneerui/floating-phone"
import { motion } from "framer-motion"
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi"
import Link from "next/link"

const socialLinks = [
    {
      icon: FiTwitter,
      href: "https://twitter.com/antonio_kodheli",
      label: "Twitter",
      color: "hover:bg-blue-500",
    },
    {
      icon: FiInstagram,
      href: "https://instagram.com/codewithtoni_",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/antonio-kodheli-1430aa290/",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: FiGithub,
      href: "https://github.com/AntonioKOD",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
  ]
  
  const ProfileContent = () => (
    <div className="flex flex-col h-full w-full items-center justify-center p-6 text-white">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-black-500 flex items-center justify-center">
          <span className="text-4xl font-bold">AK</span>
        </div>
      </motion.div>
  
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold mb-2">codeWithToni</h2>
        <p className="text-white/80">Full Stack Developer</p>
      </motion.div>
  
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex space-x-4"
      >
        {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
          <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-2 bg-white/10 rounded-full cursor-pointer transition-colors duration-200 ${color}`}
              aria-label={label}
            >
              <Icon/>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )

export default function SocialProfileDemo() {
  return (
    <div className="min-h-scree flex items-center justify-center p-8">
      <div className="text-center">
        <FloatingPhone
          gradientStart="#7C3AED"
          gradientEnd="#0F0F0F"
          textColor="#ffffff"
          content={<ProfileContent />}
          actionText="Connect with Toni"
          actionLink="https://codewithtoni.com"
          showStatusBar={true}
          title="@codewithtoni"
        />
      </div>
    </div>
  )
}

