"use client"

import React, { useState, useCallback, useLayoutEffect, useRef, useMemo } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

export interface GalleryComponent {
  title: string
  href: string
  category: string
  isNew?: boolean
  description?: string
}

interface ComponentGalleryProps {
  components: GalleryComponent[]
  categories: string[]
}

const categoryDot: Record<string, string> = {
  "Backgrounds":     "bg-indigo-400",
  "Cards":           "bg-cyan-400",
  "Special Effects": "bg-pink-400",
  "Loaders":         "bg-amber-400",
  "Testimonials":    "bg-emerald-400",
  "Pricing":         "bg-sky-400",
  "Navigation":      "bg-violet-400",
  "Hero Sections":   "bg-rose-400",
  "Getting Started": "bg-zinc-400",
}

// ─── Mini preview components per slug ────────────────────────────────────────

function PreviewHeroGradient() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute bottom-3 left-3 right-3">
        <div className="mb-1.5 h-2 w-1/2 rounded bg-white/40" />
        <div className="h-1.5 w-3/4 rounded bg-white/20" />
      </div>
    </div>
  )
}

function PreviewHeroVideo() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-10 items-center justify-center rounded-full border-2 border-white/40 bg-white/10">
          <div className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-white/80" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <div className="mb-1 h-1.5 w-1/3 rounded bg-white/30" />
        <div className="h-1 w-3/4 rounded bg-white/20" />
      </div>
    </div>
  )
}

function PreviewAnnouncementBanner() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-950 p-3">
      <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-violet-400" />
          <div className="h-1.5 w-20 rounded bg-violet-300/50" />
        </div>
        <div className="size-3 rounded-sm bg-zinc-600" />
      </div>
      <div className="h-2 w-3/4 rounded bg-zinc-800" />
      <div className="h-2 w-1/2 rounded bg-zinc-800" />
    </div>
  )
}

function PreviewParticleBackground() {
  const dots = [
    [20,15],[45,35],[70,20],[85,55],[30,70],[60,80],[15,50],[75,65],[50,45],[35,25],
    [65,40],[25,85],[55,15],[80,30],[40,60]
  ]
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      {dots.map(([x,y],i) => (
        <div key={i} className="absolute size-0.5 rounded-full bg-violet-400/60" style={{left:`${x}%`,top:`${y}%`}} />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
    </div>
  )
}

function PreviewAuroraBackground() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      <div className="absolute -left-8 top-0 h-24 w-32 rounded-full bg-violet-600/40 blur-2xl" />
      <div className="absolute -right-4 bottom-0 h-20 w-28 rounded-full bg-cyan-500/30 blur-2xl" />
      <div className="absolute left-1/3 top-1/3 h-16 w-24 rounded-full bg-indigo-500/25 blur-xl" />
    </div>
  )
}

function PreviewBeamBackground() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      {[0,1,2,3,4].map(i => (
        <div
          key={i}
          className="absolute bottom-0 w-px origin-bottom opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            height: `${50 + i * 8}%`,
            background: `linear-gradient(to top, ${i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}, transparent)`,
          }}
        />
      ))}
    </div>
  )
}

function PreviewDotPattern() {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.4) 1px, transparent 1px)',
        backgroundSize: '12px 12px',
        backgroundColor: '#09090b',
      }}
    />
  )
}

function PreviewGridPattern() {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.2) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#09090b',
      }}
    />
  )
}

function PreviewNoiseTexture() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950">
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise-g"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter>
        <rect width="100%" height="100%" filter="url(#noise-g)" opacity="0.4"/>
      </svg>
    </div>
  )
}

function PreviewGlassCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-600/30 to-cyan-500/20 p-3">
      <div className="w-full rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
        <div className="mb-2 h-2 w-2/3 rounded bg-white/40" />
        <div className="h-1.5 w-full rounded bg-white/20" />
        <div className="mt-1 h-1.5 w-3/4 rounded bg-white/20" />
      </div>
    </div>
  )
}

function PreviewGlowCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-4">
      <div className="relative w-full rounded-xl border border-violet-500/30 bg-zinc-900 p-3 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
        <div className="absolute -inset-px rounded-xl bg-violet-500/10" />
        <div className="mb-2 h-2 w-1/2 rounded bg-violet-400/60" />
        <div className="h-1.5 w-full rounded bg-zinc-700" />
        <div className="mt-1 h-1.5 w-3/4 rounded bg-zinc-700" />
      </div>
    </div>
  )
}

function PreviewFlipCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-4">
      <div className="relative w-full" style={{perspective: '300px'}}>
        <div className="rounded-xl border border-cyan-500/30 bg-zinc-900 p-3" style={{transform: 'rotateY(-12deg)'}}>
          <div className="mb-2 size-6 rounded-lg bg-cyan-500/30" />
          <div className="h-2 w-2/3 rounded bg-zinc-700" />
          <div className="mt-1 h-1.5 w-full rounded bg-zinc-800" />
        </div>
      </div>
    </div>
  )
}

function PreviewTiltCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-4">
      <div
        className="w-full rounded-xl border border-violet-500/20 bg-zinc-900 p-3 shadow-xl"
        style={{transform: 'perspective(300px) rotateX(6deg) rotateY(-6deg)'}}
      >
        <div className="mb-2 h-2 w-1/2 rounded bg-violet-400/50" />
        <div className="h-1.5 w-full rounded bg-zinc-700" />
        <div className="mt-1 h-1.5 w-3/4 rounded bg-zinc-700" />
      </div>
    </div>
  )
}

function PreviewFeatureCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-4">
      <div className="w-full rounded-xl border border-border bg-zinc-900 p-3">
        <div className="mb-2 flex size-7 items-center justify-center rounded-lg bg-violet-500/20">
          <div className="size-3 rounded bg-violet-400/80" />
        </div>
        <div className="h-2 w-2/3 rounded bg-zinc-600" />
        <div className="mt-1.5 h-1.5 w-full rounded bg-zinc-700/60" />
        <div className="mt-1 h-1.5 w-4/5 rounded bg-zinc-700/60" />
      </div>
    </div>
  )
}

function PreviewBentoGrid() {
  return (
    <div className="grid h-full w-full grid-cols-3 gap-1 bg-zinc-950 p-2">
      <div className="col-span-2 rounded-lg bg-violet-500/20 border border-violet-500/20" />
      <div className="rounded-lg bg-cyan-500/20 border border-cyan-500/20" />
      <div className="rounded-lg bg-indigo-500/20 border border-indigo-500/20" />
      <div className="col-span-2 rounded-lg bg-zinc-800 border border-zinc-700/50" />
    </div>
  )
}

function PreviewBorderBeam() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-5">
      <div className="relative w-full rounded-xl p-px">
        <div
          className="absolute inset-0 rounded-xl opacity-70"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, #8b5cf6 60deg, #06b6d4 120deg, transparent 180deg)',
            animation: 'spin 3s linear infinite',
          }}
        />
        <div className="relative rounded-xl bg-zinc-900 p-3">
          <div className="h-2 w-1/2 rounded bg-zinc-700" />
          <div className="mt-1 h-1.5 w-3/4 rounded bg-zinc-800" />
        </div>
      </div>
    </div>
  )
}

function PreviewMeteors() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      {[0,1,2,3].map(i => (
        <div
          key={i}
          className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-60"
          style={{
            width: `${30 + i * 10}px`,
            top: `${10 + i * 20}%`,
            left: `${5 + i * 22}%`,
            transform: 'rotate(-35deg)',
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-white/40" />
      </div>
    </div>
  )
}

function PreviewShimmerButton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2">
        <div
          className="absolute inset-0 -skew-x-12 translate-x-full opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: 'shimmer-slide 2s infinite',
          }}
        />
        <span className="relative text-xs font-medium text-white">Get Started</span>
      </div>
    </div>
  )
}

function PreviewShinyButton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 px-5 py-2 shadow-lg shadow-violet-600/25">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
        <span className="relative text-xs font-semibold text-white">Click Me</span>
      </div>
    </div>
  )
}

function PreviewNeuButton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-200">
      <div
        className="rounded-xl px-5 py-2 text-xs font-semibold text-zinc-700"
        style={{
          background: '#e4e4e7',
          boxShadow: '4px 4px 8px #c0c0c2, -4px -4px 8px #ffffff',
        }}
      >
        Button
      </div>
    </div>
  )
}

function PreviewRippleButton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="relative overflow-hidden rounded-lg bg-violet-600 px-5 py-2 shadow-lg shadow-violet-600/30">
        <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 opacity-50 scale-100" />
        <span className="relative text-xs font-semibold text-white">Click</span>
      </div>
    </div>
  )
}

function PreviewHoverButton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="group relative rounded-lg border border-violet-500/40 px-5 py-2">
        <div className="absolute inset-0 rounded-lg bg-violet-500/10" />
        <span className="relative text-xs font-medium text-violet-300">Hover Me</span>
      </div>
    </div>
  )
}

function PreviewAnimatedShinyText() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <span
        className="text-sm font-bold"
        style={{
          background: 'linear-gradient(90deg, #8b5cf6 0%, #e2e8f0 40%, #06b6d4 60%, #8b5cf6 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        ✨ Shiny Text
      </span>
    </div>
  )
}

function PreviewSpinningText() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="relative flex size-16 items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
          <path id="circle-g" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none"/>
          <text fontSize="9" fill="#8b5cf6" letterSpacing="2">
            <textPath href="#circle-g">PIONEER UI • PIONEER UI •</textPath>
          </text>
        </svg>
        <div className="size-4 rounded-full bg-violet-500/40" />
      </div>
    </div>
  )
}

function PreviewTextScramble() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 px-4">
      <span className="font-mono text-sm font-semibold text-violet-400">
        H3ll0 W0rld_
      </span>
    </div>
  )
}

function PreviewTextAnimate() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 px-4">
      <div className="text-center">
        <span className="text-sm font-bold text-white opacity-100">Build </span>
        <span className="text-sm font-bold text-violet-400 opacity-80">beautiful </span>
        <span className="text-sm font-bold text-cyan-400 opacity-60">UIs</span>
      </div>
    </div>
  )
}

function PreviewTypewriter() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 px-4">
      <span className="font-mono text-sm text-violet-300">
        Pioneer UI<span className="animate-pulse text-cyan-400">|</span>
      </span>
    </div>
  )
}

function PreviewNumberTicker() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <span className="text-3xl font-bold tabular-nums text-white">
        1,<span className="text-violet-400">234</span>
      </span>
    </div>
  )
}

function PreviewCountupStats() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 bg-zinc-950 px-3">
      {[['50+', 'Components'], ['10K', 'Users'], ['MIT', 'License']].map(([n, l]) => (
        <div key={l} className="text-center">
          <div className="text-lg font-bold text-violet-400">{n}</div>
          <div className="text-[9px] text-zinc-500">{l}</div>
        </div>
      ))}
    </div>
  )
}

function PreviewSpinnerVariants() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 bg-zinc-950">
      <div className="size-6 animate-spin rounded-full border-2 border-zinc-700 border-t-violet-500" />
      <div className="flex gap-0.5">
        {[0,1,2].map(i => (
          <div key={i} className="h-4 w-1 animate-pulse rounded-full bg-cyan-500/70" style={{animationDelay:`${i*0.15}s`}} />
        ))}
      </div>
      <div className="size-5 animate-ping rounded-full bg-violet-500/40" />
    </div>
  )
}

function PreviewProgressBar() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-950 px-6">
      {[70, 45, 85].map((w, i) => (
        <div key={i} className="w-full rounded-full bg-zinc-800 h-1.5">
          <div
            className="h-1.5 rounded-full"
            style={{
              width: `${w}%`,
              background: i === 0 ? '#8b5cf6' : i === 1 ? '#06b6d4' : 'linear-gradient(90deg,#8b5cf6,#06b6d4)',
            }}
          />
        </div>
      ))}
    </div>
  )
}

function PreviewSkeletonCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3">
        <div className="mb-2 h-10 w-full animate-pulse rounded-lg bg-zinc-800" />
        <div className="h-2 w-2/3 animate-pulse rounded bg-zinc-700" />
        <div className="mt-1 h-2 w-full animate-pulse rounded bg-zinc-800" />
        <div className="mt-1 h-2 w-4/5 animate-pulse rounded bg-zinc-800" />
      </div>
    </div>
  )
}

function PreviewTestimonialCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3">
        <div className="mb-2 flex gap-0.5">
          {[0,1,2,3,4].map(i => <div key={i} className="size-2 text-amber-400 text-[8px]">★</div>)}
        </div>
        <div className="h-1.5 w-full rounded bg-zinc-700" />
        <div className="mt-1 h-1.5 w-3/4 rounded bg-zinc-700" />
        <div className="mt-2 flex items-center gap-1.5">
          <div className="size-4 rounded-full bg-violet-500/40" />
          <div className="h-1.5 w-16 rounded bg-zinc-600" />
        </div>
      </div>
    </div>
  )
}

function PreviewTestimonialGrid() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-1 bg-zinc-950 p-2">
      {[0,1,2,3].map(i => (
        <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900 p-1.5">
          <div className="mb-1 h-1 w-full rounded bg-zinc-700" />
          <div className="h-1 w-3/4 rounded bg-zinc-800" />
          <div className="mt-1.5 flex items-center gap-1">
            <div className="size-2.5 rounded-full bg-violet-500/50" />
            <div className="h-1 w-8 rounded bg-zinc-700" />
          </div>
        </div>
      ))}
    </div>
  )
}

function PreviewMarqueeTestimonials() {
  return (
    <div className="flex h-full w-full flex-col justify-center overflow-hidden bg-zinc-950 gap-1.5">
      {[0,1].map(row => (
        <div key={row} className="flex gap-2 opacity-80" style={{transform: row === 1 ? 'translateX(-30px)' : 'none'}}>
          {[0,1,2].map(i => (
            <div key={i} className="flex-shrink-0 w-20 rounded-lg border border-zinc-800 bg-zinc-900 px-2 py-1">
              <div className="h-1 w-full rounded bg-zinc-700" />
              <div className="mt-0.5 h-1 w-2/3 rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function PreviewAnimatedTestimonials() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="relative w-full">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
          <div className="mb-2 h-1.5 w-full rounded bg-zinc-700" />
          <div className="h-1.5 w-4/5 rounded bg-zinc-700" />
          <div className="mt-2 flex items-center gap-1.5">
            <div className="size-5 rounded-full bg-cyan-500/30" />
            <div>
              <div className="h-1.5 w-12 rounded bg-zinc-600" />
              <div className="mt-0.5 h-1 w-8 rounded bg-zinc-700" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-2 right-2 rounded-xl border border-zinc-800/50 bg-zinc-900/50 h-2" />
      </div>
    </div>
  )
}

function PreviewPricingCard() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="w-full rounded-xl border border-violet-500/30 bg-zinc-900 p-3">
        <div className="mb-1 h-1.5 w-1/3 rounded bg-violet-400/60" />
        <div className="mb-2 text-lg font-bold text-white leading-none">$29</div>
        <div className="space-y-1">
          {[0,1,2].map(i => (
            <div key={i} className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-cyan-500/60" />
              <div className="h-1 w-16 rounded bg-zinc-700" />
            </div>
          ))}
        </div>
        <div className="mt-2 h-4 w-full rounded-md bg-violet-600/80" />
      </div>
    </div>
  )
}

function PreviewPricingToggle() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-zinc-950">
      <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-1 py-0.5">
        <div className="rounded-full bg-violet-600 px-3 py-0.5 text-[9px] font-semibold text-white">Monthly</div>
        <div className="px-3 py-0.5 text-[9px] text-zinc-400">Annual</div>
      </div>
      <div className="flex gap-2">
        {[['$9', 'Starter'], ['$29', 'Pro']].map(([price, plan]) => (
          <div key={plan} className="rounded-lg border border-zinc-800 bg-zinc-900 px-2 py-1 text-center">
            <div className="text-xs font-bold text-white">{price}</div>
            <div className="text-[9px] text-zinc-500">{plan}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewPillNav() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="flex items-center gap-1 rounded-full border border-zinc-700/50 bg-zinc-900 p-1">
        {['Home', 'Docs', 'Blog'].map((item, i) => (
          <div
            key={item}
            className={cn(
              'rounded-full px-3 py-1 text-[10px] font-medium transition-all',
              i === 0 ? 'bg-violet-600 text-white' : 'text-zinc-400',
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewFluidTabs() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-zinc-950 px-4">
      <div className="relative flex w-full items-center gap-1 border-b border-zinc-800">
        {['Design', 'Code', 'Preview'].map((tab, i) => (
          <div
            key={tab}
            className={cn(
              'px-3 py-1.5 text-[10px] font-medium',
              i === 0 ? 'text-violet-400 border-b-2 border-violet-500 -mb-px' : 'text-zinc-500',
            )}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="h-2 w-full rounded bg-zinc-800" />
    </div>
  )
}

function PreviewBreadcrumbAnimated() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 px-4">
      <div className="flex items-center gap-1 text-[10px]">
        <span className="text-zinc-500">Home</span>
        <span className="text-zinc-700">/</span>
        <span className="text-zinc-500">Docs</span>
        <span className="text-zinc-700">/</span>
        <span className="text-violet-400 font-medium">Components</span>
      </div>
    </div>
  )
}

function PreviewDock() {
  return (
    <div className="flex h-full w-full items-end justify-center bg-zinc-950 pb-3">
      <div className="flex items-end gap-1.5 rounded-2xl border border-zinc-700/50 bg-zinc-900/80 px-3 py-2 backdrop-blur-sm">
        {[
          'bg-blue-500', 'bg-violet-500', 'bg-cyan-500', 'bg-rose-500', 'bg-amber-500'
        ].map((color, i) => (
          <div
            key={i}
            className={cn('rounded-xl', color, i === 2 ? 'size-9' : i === 1 || i === 3 ? 'size-7' : 'size-6')}
          />
        ))}
      </div>
    </div>
  )
}

function PreviewLinkReveal() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 bg-zinc-950 px-4">
      {['About', 'Work', 'Contact'].map((link, i) => (
        <div key={link} className="relative">
          <span className={cn('text-xs font-medium', i === 1 ? 'text-violet-400' : 'text-zinc-400')}>{link}</span>
          {i === 1 && <div className="absolute -bottom-0.5 left-0 h-px w-full bg-violet-500" />}
        </div>
      ))}
    </div>
  )
}

function PreviewSimpleDateSelector() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-3">
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-2">
        <div className="mb-1.5 flex items-center justify-between">
          <div className="text-[9px] font-semibold text-zinc-400">April 2026</div>
          <div className="flex gap-1">
            <div className="size-3 rounded bg-zinc-800" />
            <div className="size-3 rounded bg-zinc-800" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {Array.from({length: 14}, (_, i) => (
            <div
              key={i}
              className={cn(
                'flex h-4 items-center justify-center rounded text-[8px]',
                i === 5 ? 'bg-violet-600 text-white font-semibold' : 'text-zinc-600 hover:bg-zinc-800',
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewHoverLinks() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-950 px-6">
      {['Services', 'Portfolio', 'Contact'].map((link, i) => (
        <div key={link} className="flex w-full items-center gap-2 group">
          <div className={cn('h-px flex-1 transition-all', i === 1 ? 'bg-violet-500/60' : 'bg-zinc-700')} />
          <span className={cn('text-xs font-medium', i === 1 ? 'text-violet-400' : 'text-zinc-500')}>{link}</span>
          <div className={cn('h-px flex-1', i === 1 ? 'bg-violet-500/60' : 'bg-zinc-700')} />
        </div>
      ))}
    </div>
  )
}

function PreviewFloatingPhone() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div
        className="relative h-20 w-10 rounded-xl border-2 border-zinc-700 bg-zinc-900 shadow-lg shadow-violet-500/20"
        style={{transform: 'perspective(200px) rotateY(-10deg) rotateX(5deg)'}}
      >
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-zinc-700" />
        <div className="absolute inset-2 top-4 rounded-lg bg-gradient-to-b from-violet-600/30 to-zinc-900" />
      </div>
    </div>
  )
}

// ─── Preview map by slug ──────────────────────────────────────────────────────

const SLUG_PREVIEWS: Record<string, React.FC> = {
  "hero-gradient":          PreviewHeroGradient,
  "hero-video":             PreviewHeroVideo,
  "announcement-banner":    PreviewAnnouncementBanner,
  "particle-background":    PreviewParticleBackground,
  "aurora-background":      PreviewAuroraBackground,
  "beam-background":        PreviewBeamBackground,
  "dot-pattern":            PreviewDotPattern,
  "grid-pattern":           PreviewGridPattern,
  "noise-texture":          PreviewNoiseTexture,
  "glass-card":             PreviewGlassCard,
  "glow-card":              PreviewGlowCard,
  "flip-card":              PreviewFlipCard,
  "tilt-card":              PreviewTiltCard,
  "feature-card":           PreviewFeatureCard,
  "bento-grid":             PreviewBentoGrid,
  "border-beam":            PreviewBorderBeam,
  "meteors":                PreviewMeteors,
  "shimmer-button":         PreviewShimmerButton,
  "shiny-button":           PreviewShinyButton,
  "neu-button":             PreviewNeuButton,
  "ripple-button":          PreviewRippleButton,
  "hover-button":           PreviewHoverButton,
  "animated-shiny-text":    PreviewAnimatedShinyText,
  "spinning-text":          PreviewSpinningText,
  "text-scramble":          PreviewTextScramble,
  "text-animate":           PreviewTextAnimate,
  "typewriter":             PreviewTypewriter,
  "number-ticker":          PreviewNumberTicker,
  "countup-stats":          PreviewCountupStats,
  "spinner-variants":       PreviewSpinnerVariants,
  "progress-bar":           PreviewProgressBar,
  "skeleton-card":          PreviewSkeletonCard,
  "testimonial-card":       PreviewTestimonialCard,
  "testimonial-grid":       PreviewTestimonialGrid,
  "marquee-testimonials":   PreviewMarqueeTestimonials,
  "animated-testimonials":  PreviewAnimatedTestimonials,
  "pricing-card":           PreviewPricingCard,
  "pricing-toggle":         PreviewPricingToggle,
  "pill-nav":               PreviewPillNav,
  "fluid-tabs":             PreviewFluidTabs,
  "breadcrumb-animated":    PreviewBreadcrumbAnimated,
  "dock":                   PreviewDock,
  "link-reveal":            PreviewLinkReveal,
  "simple-date-selector":   PreviewSimpleDateSelector,
  "hover-links":            PreviewHoverLinks,
  "floating-phone":         PreviewFloatingPhone,
}

// ─── ComponentCard ────────────────────────────────────────────────────────────

function ComponentCard({ comp }: { comp: GalleryComponent }) {
  const [copied, setCopied] = useState(false)
  const slug = comp.href.split("/").pop() ?? ""
  const installCmd = `npx shadcn@latest add "https://pioneerui.com/r/${slug}"`
  const dot = categoryDot[comp.category] ?? "bg-zinc-400"
  const Preview = SLUG_PREVIEWS[slug]

  const handleCopy = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      navigator.clipboard.writeText(installCmd).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    },
    [installCmd],
  )

  return (
    <div className="gallery-card group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      {/* Preview area */}
      <Link href={comp.href} className="block">
        <div className="relative h-36 overflow-hidden border-b border-border transition-all duration-300 group-hover:opacity-95 bg-zinc-950">
          {Preview ? (
            <Preview />
          ) : (
            // Fallback: category gradient with initials
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500/10 via-zinc-900 to-cyan-500/10">
              <span className="text-2xl font-bold tracking-tight text-foreground/20 select-none">
                {comp.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
              </span>
            </div>
          )}
          {comp.isNew && (
            <span className="absolute right-2 top-2 z-10 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
              New
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <span className={cn("h-2 w-2 flex-shrink-0 rounded-full", dot)} />
          <span className="truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {comp.category}
          </span>
        </div>
        <Link href={comp.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          {comp.title}
        </Link>

        {/* CLI install */}
        <div className="mt-auto flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground">
          <span className="flex-1 truncate">
            npx shadcn add &quot;{`…/${slug}`}&quot;
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy install command"
            className="flex-shrink-0 rounded p-0.5 text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            {copied ? (
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── ComponentGallery ─────────────────────────────────────────────────────────

export function ComponentGallery({ components, categories }: ComponentGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [query, setQuery] = useState("")
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = components.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory
    const matchQ =
      !query ||
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((cat) => [cat, components.filter((c) => c.category === cat).length]),
      ),
    [components, categories],
  )

  useLayoutEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll(".gallery-card")
    if (!cards.length) return
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.04, clearProps: "transform" },
    )
  }, [filtered.length, activeCategory])

  return (
    <div className="space-y-6">
      {/* Search + count */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-xs w-full">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search components…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span> components
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150",
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {cat}
            {cat !== "All" && categoryCounts[cat] != null && (
              <span className="ml-1 opacity-50">{categoryCounts[cat]}</span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div ref={gridRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((comp) => (
            <ComponentCard key={comp.href} comp={comp} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-20 text-center text-muted-foreground">
          <svg className="h-12 w-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" />
          </svg>
          <p className="text-sm">No components match &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  )
}
