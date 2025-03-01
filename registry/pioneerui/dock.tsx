"use client"

import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion"
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type ReactElement,
} from "react"
import { cn } from "@/lib/utils"

// Constants
const DOCK_CONFIG = {
  HEIGHT: 128,
  DEFAULT_MAGNIFICATION: 80,
  DEFAULT_DISTANCE: 150,
  DEFAULT_PANEL_HEIGHT: 64,
  DEFAULT_SPRING: {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  },
} as const

// Types
interface DockContextType {
  mouseX: MotionValue<number>
  spring: SpringOptions
  magnification: number
  distance: number
  isHovered: MotionValue<number>
}

interface DockProps {
  children: ReactNode
  className?: string
  distance?: number
  panelHeight?: number
  magnification?: number
  spring?: SpringOptions
}

interface DockItemProps {
  className?: string
  children: ReactNode
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

interface DockLabelProps {
  className?: string
  children: ReactNode
}

interface DockIconProps {
  className?: string
  children: ReactNode
}

// Context
const DockContext = createContext<DockContextType | undefined>(undefined)

function useDock() {
  const context = useContext(DockContext)
  if (!context) {
    throw new Error("useDock must be used within a DockProvider")
  }
  return context
}

// Components
export function Dock({
  children,
  className,
  spring = DOCK_CONFIG.DEFAULT_SPRING,
  magnification = DOCK_CONFIG.DEFAULT_MAGNIFICATION,
  distance = DOCK_CONFIG.DEFAULT_DISTANCE,
  panelHeight = DOCK_CONFIG.DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  const isHovered = useMotionValue(0)

  const maxHeight = useMemo(() => {
    return Math.max(DOCK_CONFIG.HEIGHT, magnification + magnification / 2 + 4)
  }, [magnification])

  const heightTransform = useTransform(isHovered, [0, 1], [panelHeight, maxHeight])
  const height = useSpring(heightTransform, spring)

  return (
    <motion.div
      style={{
        height,
        scrollbarWidth: "none",
      }}
      className="mx-2 flex max-w-full items-end overflow-x-auto"
    >
      <motion.div
        onMouseMove={(event) => {
          isHovered.set(1)
          mouseX.set(event.pageX)
        }}
        onMouseLeave={() => {
          isHovered.set(0)
          mouseX.set(Number.POSITIVE_INFINITY)
        }}
        className={cn(
          "mx-auto flex w-fit gap-4 rounded-2xl bg-background/80 px-4 backdrop-blur-md dark:bg-neutral-900/80",
          className,
        )}
        style={{ height: panelHeight }}
        role="toolbar"
          aria-label="Application dock"
        >
          <DockContext.Provider value={{ mouseX, spring, distance, magnification, isHovered }}>{children}</DockContext.Provider>
        <DockContext.Provider value={{ mouseX, spring, distance, magnification, isHovered }}>{children}</DockContext.Provider>
      </motion.div>
    </motion.div>
  )
}

export function DockItem({ children, className, onClick, href, target, rel, ...props }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { distance, magnification, mouseX, spring } = useDock()
  const isHovered = useMotionValue(0)

  const mouseDistance = useMotionValue(0)

  useEffect(() => {
    if (!ref.current) return

    const updateMouseDistance = () => {
      if (!ref.current) {
        mouseDistance.set(0)
        return
      }
      const rect = ref.current.getBoundingClientRect()
      mouseDistance.set(mouseX.get() - rect.x - rect.width / 2)
    }

    const unsubscribeMouseX = mouseX.on("change", updateMouseDistance)

    updateMouseDistance()

    return () => {
      unsubscribeMouseX()
    }
  }, [mouseX])

  const widthTransform = useTransform(mouseDistance, [-distance, 0, distance], [40, magnification, 40])
  const width = useSpring(widthTransform, spring)

  const Component = href ? motion.a : motion.button

  return (
    <Component
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
      onClick={onClick}
      href={href}
      target={target}
      rel={href && target === "_blank" ? "noopener noreferrer" : rel}
      role={href ? undefined : "button"}
      tabIndex={0}
      {...props}
    >
      {Children.map(children, (child) => cloneElement(child as ReactElement, { width, isHovered }))}
    </Component>
  )
}

export function DockLabel({ children, className }: DockLabelProps & { isHovered?: MotionValue<number> }) {
  const [isVisible, setIsVisible] = useState(false)
  const { isHovered } = useContext(DockContext) || {}

  useEffect(() => {
    if (!isHovered) return
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1)
    })
    return () => unsubscribe()
  }, [isHovered])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute -top-6 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border bg-background px-2 py-0.5 text-xs text-foreground shadow-sm dark:border-neutral-800",
            className,
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function DockIcon({ children, className, width }: DockIconProps & { width?: MotionValue<number> }) {
  const scale = width ? useTransform(width, (val) => val / 2) : undefined

  return (
    <motion.div style={{ width: scale }} className={cn("flex items-center justify-center", className)}>
      {children}
    </motion.div>
  )
}

