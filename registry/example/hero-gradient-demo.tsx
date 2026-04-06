import { HeroGradient } from "../pioneerui/hero-gradient"

export default function HeroGradientDemo() {
  return (
    <HeroGradient
      badge="New components every week"
      headline="Build beautiful interfaces faster"
      subheadline="Production-ready animated components built with Tailwind CSS and Framer Motion. Copy, paste, ship."
      cta={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/docs"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:-translate-y-0.5"
          >
            Browse components
          </a>
          <a
            href="/docs/installation"
            className="rounded-xl border bg-background/80 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            Get started
          </a>
        </div>
      }
    />
  )
}
