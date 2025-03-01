"use client"

import { useCallback, useMemo } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"
import type { ISourceOptions, MoveDirection, OutMode } from "tsparticles-engine"
import { cn } from "@/lib/utils"

export type ParticlePreset = 
  | "default"
  | "links"
  | "bubbles"
  | "snow"
  | "stars"
  | "fireflies"
  | "floating"
  | "confetti"

export interface ParticleBackgroundProps {
  className?: string
  preset?: ParticlePreset
  color?: string
  particleCount?: number
  speed?: number
  interactive?: boolean
  zIndex?: number
  containerId?: string
}

export function ParticleBackground({
  className,
  preset = "default",
  color = "#5B21B6",
  particleCount = 50,
  speed = 3,
  interactive = true,
  zIndex = 0,
  containerId = "tsparticles",
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Add any initialization after particles are loaded
  }, [])

  const baseConfig = useMemo(() => {
    return {
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: interactive,
            mode: "push",
          },
          onHover: {
            enable: interactive,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: color,
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none" as MoveDirection,
          enable: true,
          outModes: {
            default: "bounce" as OutMode,
          },
          random: false,
          speed: speed,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: particleCount,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }
  }, [color, interactive, particleCount, speed])

  const presetConfigs = useMemo(
    () => ({
      default: baseConfig,
      links: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          links: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          ...baseConfig.interactivity,
          events: {
            ...baseConfig.interactivity.events,
            onHover: {
              enable: interactive,
              mode: "grab",
            },
          },
          modes: {
            ...baseConfig.interactivity.modes,
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
      } as ISourceOptions,
      bubbles: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          move: {
            ...baseConfig.particles.move,
            direction: "none" as MoveDirection,
            outModes: {
              default: "out" as OutMode,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            value: { min: 5, max: 15 },
          },
        },
        interactivity: {
          ...baseConfig.interactivity,
          events: {
            ...baseConfig.interactivity.events,
            onHover: {
              enable: interactive,
              mode: "bubble",
            },
          },
          modes: {
            ...baseConfig.interactivity.modes,
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          },
        },
      } as ISourceOptions,
      snow: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          color: {
            value: "#ffffff",
          },
          move: {
            ...baseConfig.particles.move,
            direction: "bottom" as MoveDirection,
            outModes: {
              default: "out" as OutMode,
            },
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
      } as ISourceOptions,
      stars: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          color: {
            value: "#ffffff",
          },
          move: {
            ...baseConfig.particles.move,
            direction: "none" as MoveDirection,
            outModes: {
              default: "out" as OutMode,
            },
            random: true,
          },
          shape: {
            type: "star",
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
        },
      } as ISourceOptions,
      fireflies: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          color: {
            value: "#ffeb3b",
          },
          move: {
            ...baseConfig.particles.move,
            direction: "none" as MoveDirection,
            outModes: {
              default: "out" as OutMode,
            },
            random: true,
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
        },
      } as ISourceOptions,
      floating: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          move: {
            ...baseConfig.particles.move,
            direction: "top" as MoveDirection,
            outModes: {
              default: "out" as OutMode,
            },
            random: true,
          },
          shape: {
            type: ["circle", "square", "triangle"],
          },
          size: {
            value: { min: 3, max: 6 },
          },
        },
        interactivity: {
          ...baseConfig.interactivity,
          events: {
            ...baseConfig.interactivity.events,
            onHover: {
              enable: interactive,
              mode: "bubble",
            },
          },
          modes: {
            ...baseConfig.interactivity.modes,
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
          },
        },
      } as ISourceOptions,
      confetti: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          color: {
            value: [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
            ],
          },
          move: {
            ...baseConfig.particles.move,
            direction: "bottom" as MoveDirection,
            outModes: {
              default: "out" as OutMode,
            },
            random: true,
          },
          shape: {
            type: ["circle", "square"],
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 3, max: 6 },
          },
        },
      } as ISourceOptions,
    }),
    [baseConfig, color, interactive],
  )

  return (
    <div className={cn("absolute inset-0", className)} style={{ zIndex }}>
      <Particles
        id={containerId}
        init={particlesInit}
        loaded={particlesLoaded}
        options={presetConfigs[preset]}
        className="h-full w-full"
      />
    </div>
  )
}

