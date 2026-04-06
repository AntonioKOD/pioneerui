import { GlowCard } from "../pioneerui/glow-card"

export default function GlowCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 max-w-2xl mx-auto">
      <GlowCard>
        <h3 className="text-base font-semibold text-foreground">Radial Glow</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Move your cursor over this card to see a radial glow follow your mouse.
        </p>
      </GlowCard>
      <GlowCard glowColor="rgba(236,72,153,0.15)">
        <h3 className="text-base font-semibold text-foreground">Pink Glow</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Customize the glow color with any rgba value for your brand.
        </p>
      </GlowCard>
    </div>
  )
}
