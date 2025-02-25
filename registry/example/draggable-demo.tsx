
import { Home, Settings, User, Bell, Github, Twitter, Linkedin } from 'lucide-react'

import { DraggableGlassNavbar } from '@/registry/pioneerui/draggable-navbar'


const navItems = [
    { label: "Home", href: "#", icon: <Home /> },
    { label: "Settings", href: "#", icon: <Settings /> },
    { label: "Profile", href: "#", icon: <User /> },
    { label: "Notifications", href: "#", icon: <Bell /> },
  ]

  

export default function DraggableNavbarDemo() {
    return (
        <DraggableGlassNavbar items={navItems} className="backdrop-blur-md" />
    )
}

