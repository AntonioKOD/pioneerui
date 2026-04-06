"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ChevronRight, Sparkles, Star } from "lucide-react"
import { Icons } from "@/components/icons"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

// Lazy-load the Three.js canvas to avoid SSR issues
const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false },
)

const HEADLINE_WORDS = ["Build", "Faster.", "Design", "Smarter.", "Scale", "Effortlessly."]

export function Hero3D() {
  const sectionRef    = useRef<HTMLElement>(null)
  const logoRef       = useRef<HTMLDivElement>(null)
  const headlineRef   = useRef<HTMLHeadingElement>(null)
  const subRef        = useRef<HTMLParagraphElement>(null)
  const badgeRef      = useRef<HTMLDivElement>(null)
  const ctaRef        = useRef<HTMLDivElement>(null)
  const canvasWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Logo mark drops in first
      tl.fromTo(
        logoRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
      )

      // Badge drops in
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2",
      )

      // Each word in headline staggers up
      const words = headlineRef.current?.querySelectorAll("span")
      if (words) {
        tl.fromTo(
          words,
          { y: 40, opacity: 0, rotateX: -25 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.09 },
          "-=0.3",
        )
      }

      // Subtext fades in
      tl.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2",
      )

      // CTAs slide up
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2",
      )

      // Canvas fades in
      tl.fromTo(
        canvasWrapRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=0.8",
      )

      // Scroll: canvas fades out gently
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (canvasWrapRef.current) {
            gsap.set(canvasWrapRef.current, {
              opacity: 1 - self.progress * 0.7,
              y: self.progress * 40,
            })
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Dual radial glows — violet center-left + cyan bottom-right */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-0 h-[300px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

        {/* Left — text content */}
        <div className="flex max-w-2xl flex-col items-center gap-6 lg:items-start">
          {/* Logo mark + wordmark */}
          <div ref={logoRef} className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-violet-500/20 blur-xl" />
              <div className="relative flex size-14 items-center justify-center rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-600/25 to-cyan-500/10">
                <Icons.logo className="size-9" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              PioneerUI
            </span>
          </div>

          {/* Announcement badge */}
          <div ref={badgeRef}>
            <Link
              href="/docs/components/animated-counter"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 transition-colors hover:bg-violet-500/20"
            >
              {/* Live pulse dot */}
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-violet-400" />
              </span>
              <Sparkles className="size-3.5" />
              50+ animated components — all free
              <ChevronRight className="size-3.5 opacity-60" />
            </Link>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ perspective: "800px" }}
          >
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={i}
                className={cn(
                  "mr-3 inline-block",
                  i % 2 === 1
                    ? "bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
                    : "text-white",
                )}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p ref={subRef} className="max-w-xl text-lg leading-relaxed text-zinc-300">
            The open-source component library built for design engineers. Animated, accessible,
            and installable in one CLI command. Built with{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">TypeScript</span>,{" "}
            <span className="text-white">Tailwind</span> &amp;{" "}
            <span className="text-white">Motion</span>.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-3">
            <Link
              href="/docs/components"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-violet-600 text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500 hover:shadow-violet-500/30",
              )}
            >
              Browse Components
              <ChevronRight className="ml-1.5 size-4" />
            </Link>
            <Link
              href="/community"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50 hover:text-white",
              )}
            >
              Community
            </Link>
            <Link
              href="https://github.com/AntonioKOD/pioneerui"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "text-zinc-400 hover:text-white",
              )}
            >
              <Star className="mr-1.5 size-4" />
              Star on GitHub
            </Link>
          </div>

          {/* Social proof — avatar stack */}
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              {["bg-violet-400", "bg-cyan-400", "bg-violet-300", "bg-cyan-300"].map((c, i) => (
                <div key={i} className={`size-6 rounded-full border-2 border-zinc-950 ${c} opacity-90`} />
              ))}
            </div>
            <p className="text-sm text-zinc-500">
              Free forever · MIT License · No account required
            </p>
          </div>
        </div>

        {/* Right — Three.js canvas */}
        <div
          ref={canvasWrapRef}
          className="hidden h-[520px] w-full max-w-lg flex-1 lg:block"
        >
          <HeroScene />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}
