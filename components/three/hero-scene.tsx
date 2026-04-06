"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars, RoundedBox } from "@react-three/drei"
import * as THREE from "three"

// Palette — violet/cyan brand only
const CARD_COLORS = [
  "#8b5cf6", // violet-500
  "#7c3aed", // violet-600
  "#a78bfa", // violet-400
  "#06b6d4", // cyan-500
  "#22d3ee", // cyan-400
  "#6d28d9", // violet-700
  "#0891b2", // cyan-600
  "#c4b5fd", // violet-300
]

interface FloatingCardProps {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  scale?: number
  floatSpeed?: number
  floatIntensity?: number
}

function FloatingCard({
  position,
  rotation,
  color,
  scale = 1,
  floatSpeed = 1,
  floatIntensity = 0.5,
}: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.3}>
      <RoundedBox
        ref={meshRef}
        args={[1.4, 1.9, 0.08]}
        radius={0.08}
        smoothness={4}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.7}
        />
      </RoundedBox>
      {/* Card surface highlight */}
      <RoundedBox
        args={[1.2, 0.25, 0.001]}
        radius={0.04}
        position={[position[0], position[1] + 0.6, position[2] + 0.05]}
        rotation={rotation}
        scale={scale}
      >
        <meshStandardMaterial
          color="#ffffff"
          opacity={0.12}
          transparent
        />
      </RoundedBox>
    </Float>
  )
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04
    }
  })

  const cards: FloatingCardProps[] = [
    { position: [-3.5, 0.5, -1],   rotation: [0.05, 0.3,  0.05], color: CARD_COLORS[0], scale: 0.9,  floatSpeed: 1.2, floatIntensity: 0.6 },
    { position: [-1.5, -1,  1],    rotation: [-0.1, -0.2, 0.08], color: CARD_COLORS[1], scale: 1.05, floatSpeed: 0.8, floatIntensity: 0.4 },
    { position: [0.2,  1.2, 0.5],  rotation: [0.08, 0.1, -0.05], color: CARD_COLORS[2], scale: 1.1,  floatSpeed: 1.5, floatIntensity: 0.7 },
    { position: [2,   -0.5, -0.5], rotation: [-0.05, 0.15, 0.1], color: CARD_COLORS[3], scale: 0.95, floatSpeed: 1.0, floatIntensity: 0.5 },
    { position: [3.8,  0.8, 0.8],  rotation: [0.1, -0.25, -0.08],color: CARD_COLORS[4], scale: 0.85, floatSpeed: 1.3, floatIntensity: 0.55 },
    { position: [-2.8,-1.5, 0.3],  rotation: [0.12, 0.2, 0.06],  color: CARD_COLORS[5], scale: 0.8,  floatSpeed: 0.9, floatIntensity: 0.45 },
    { position: [1.2,  1.8, -1.2], rotation: [-0.08, -0.3, 0.04],color: CARD_COLORS[6], scale: 0.75, floatSpeed: 1.1, floatIntensity: 0.35 },
    { position: [3.2, -1.8, 0.2],  rotation: [0.06, 0.18, -0.1], color: CARD_COLORS[7], scale: 0.88, floatSpeed: 1.4, floatIntensity: 0.6 },
  ]

  return (
    <>
      {/* Ambient + directional lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 3, 2]} intensity={0.8} color="#a78bfa" />
      <pointLight position={[3, -2, 1]} intensity={0.6} color="#67e8f9" />

      {/* Background stars */}
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

      {/* Slowly rotating group of cards */}
      <group ref={groupRef}>
        {cards.map((card, i) => (
          <FloatingCard key={i} {...card} />
        ))}
      </group>
    </>
  )
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      className="h-full w-full"
    >
      <SceneContent />
    </Canvas>
  )
}
