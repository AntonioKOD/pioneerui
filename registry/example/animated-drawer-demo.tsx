"use client"

import {
  AnimatedDrawerDialog,
  AnimatedDrawerDialogContent,
  AnimatedDrawerDialogTrigger,
} from "@/registry/pioneerui/animated-drawer-dialog"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus, X, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function ShoppingCartDemo() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 149.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ])

  const updateQuantity = (id: number, change: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="flex justify-center p-4">
      <AnimatedDrawerDialog>
        <AnimatedDrawerDialogTrigger asChild>
          <Button className="relative">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center text-white">
                {items.length}
              </span>
            )}
          </Button>
        </AnimatedDrawerDialogTrigger>
        <AnimatedDrawerDialogContent className="w-full max-w-sm">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <span className="text-sm text-muted-foreground">{items.length} items</span>
            </div>

            <div className="flex-1 overflow-auto p-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-4 mb-4 p-3 rounded-lg bg-muted/50"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, -item.quantity)}>
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full">
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedDrawerDialogContent>
      </AnimatedDrawerDialog>
    </div>
  )
}

