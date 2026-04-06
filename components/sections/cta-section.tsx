"use client"

import Link from "next/link"
import { ChevronRight, Github } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32">
      {/* Top gradient separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Diagonal gradient band — distinct from hero's radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-900/25 via-zinc-950 to-cyan-900/15" />

      {/* Subtle grid overlay — smaller cells for visual variety vs hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400"
        >
          Get started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Start building{" "}
          <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
            beautiful UIs
          </span>{" "}
          today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-zinc-400"
        >
          Free forever. No account required. Just install and go. Or contribute your own
          components and help the community grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/docs"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-600 text-white shadow-lg shadow-violet-600/30 ring-2 ring-violet-600/0 transition-all hover:bg-violet-500 hover:ring-violet-500/30 hover:shadow-violet-500/40",
            )}
          >
            Get Started
            <ChevronRight className="ml-1.5 size-4" />
          </Link>
          <Link
            href="https://github.com/AntonioKOD/pioneerui"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white",
            )}
          >
            <Github className="mr-2 size-4" />
            Star on GitHub
          </Link>
          <Link
            href="/submit"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "text-zinc-500 hover:text-zinc-300",
            )}
          >
            Contribute a Component →
          </Link>
        </motion.div>

        {/* Trust bar */}
        <p className="mt-10 text-xs text-zinc-500">
          MIT Licensed · Works with Next.js, Vite, and any React setup · No vendor lock-in
        </p>
      </div>
    </section>
  )
}
