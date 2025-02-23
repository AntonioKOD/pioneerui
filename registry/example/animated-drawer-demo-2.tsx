"use client"

import type React from "react"

import {
  AnimatedDrawerDialog,
  AnimatedDrawerDialogContent,
  AnimatedDrawerDialogTrigger,
} from "@/registry/pioneerui/animated-drawer-dialog"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Settings, Moon, Sun, Bell, Volume2, Wifi, Bluetooth } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

interface Setting {
  id: string
  name: string
  description: string
  icon: React.ElementType
  enabled: boolean
}

export default function SettingsPanelDemo() {
  const [settings, setSettings] = useState<Setting[]>([
    {
      id: "dark-mode",
      name: "Dark Mode",
      description: "Toggle dark mode on or off",
      icon: Moon,
      enabled: true,
    },
    {
      id: "notifications",
      name: "Notifications",
      description: "Enable push notifications",
      icon: Bell,
      enabled: true,
    },
    {
      id: "sound",
      name: "Sound",
      description: "Enable sound effects",
      icon: Volume2,
      enabled: false,
    },
    {
      id: "wifi",
      name: "Wi-Fi",
      description: "Connect to wireless networks",
      icon: Wifi,
      enabled: true,
    },
    {
      id: "bluetooth",
      name: "Bluetooth",
      description: "Connect to nearby devices",
      icon: Bluetooth,
      enabled: false,
    },
  ])

  const toggleSetting = (id: string) => {
    setSettings((prev) =>
      prev.map((setting) => (setting.id === id ? { ...setting, enabled: !setting.enabled } : setting)),
    )
  }

  return (
    <div className="flex justify-center p-4">
      <AnimatedDrawerDialog>
        <AnimatedDrawerDialogTrigger asChild>
          <Button>
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </AnimatedDrawerDialogTrigger>
        <AnimatedDrawerDialogContent className="w-full max-w-sm" side="left">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Settings</h2>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <Switch checked={settings[0].enabled} onClick={() => toggleSetting("dark-mode")} />
                <Moon className="h-4 w-4" />
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {settings.slice(1).map((setting) => (
                  <motion.div
                    key={setting.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          setting.enabled ? "bg-primary/20 text-primary" : "bg-muted-foreground/20"
                        }`}
                      >
                        <setting.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{setting.name}</h3>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                    </div>
                    <Switch checked={setting.enabled} onClick={() => toggleSetting(setting.id)} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t p-4">
              <Button className="w-full" variant="outline">
                Save Changes
              </Button>
            </div>
          </div>
        </AnimatedDrawerDialogContent>
      </AnimatedDrawerDialog>
    </div>
  )
}

