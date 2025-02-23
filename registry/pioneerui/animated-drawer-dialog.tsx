"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const AnimatedDrawerDialog = DialogPrimitive.Root

const AnimatedDrawerDialogTrigger = DialogPrimitive.Trigger

const AnimatedDrawerDialogClose = DialogPrimitive.Close

const AnimatedDrawerDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    side?: "left" | "right"
  }
>(({ className, children, side = "right", ...props }, ref) => (
  <DialogPrimitive.Portal>
    <AnimatePresence>
      <DialogPrimitive.Overlay asChild>
        <motion.div
          className="fixed inset-0 z-50 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </DialogPrimitive.Overlay>
      <DialogPrimitive.Content asChild>
        <motion.div
          ref={ref}
          className={cn(
            "fixed z-50 flex h-full w-full max-w-md flex-col bg-background p-6 shadow-lg",
            side === "right" ? "right-0" : "left-0",
            className,
          )}
          initial={{ x: side === "right" ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: side === "right" ? "100%" : "-100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </motion.div>
      </DialogPrimitive.Content>
    </AnimatePresence>
  </DialogPrimitive.Portal>
))
AnimatedDrawerDialogContent.displayName = "AnimatedDrawerDialogContent"

const AnimatedDrawerDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
AnimatedDrawerDialogHeader.displayName = "AnimatedDrawerDialogHeader"

const AnimatedDrawerDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
AnimatedDrawerDialogFooter.displayName = "AnimatedDrawerDialogFooter"

const AnimatedDrawerDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
AnimatedDrawerDialogTitle.displayName = "AnimatedDrawerDialogTitle"

const AnimatedDrawerDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
AnimatedDrawerDialogDescription.displayName = "AnimatedDrawerDialogDescription"

export {
  AnimatedDrawerDialog,
  AnimatedDrawerDialogTrigger,
  AnimatedDrawerDialogContent,
  AnimatedDrawerDialogHeader,
  AnimatedDrawerDialogFooter,
  AnimatedDrawerDialogTitle,
  AnimatedDrawerDialogDescription,
  AnimatedDrawerDialogClose,
}

