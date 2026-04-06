import { PricingCard } from "../pioneerui/pricing-card"

const features = [
  { text: "Up to 5 projects", included: true },
  { text: "Basic analytics", included: true },
  { text: "Email support", included: true },
  { text: "Custom domains", included: false },
  { text: "Team collaboration", included: false },
]

const proFeatures = [
  { text: "Unlimited projects", included: true },
  { text: "Advanced analytics", included: true },
  { text: "Priority support", included: true },
  { text: "Custom domains", included: true },
  { text: "Team collaboration", included: true },
]

export default function PricingCardDemo() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-4 p-6">
      <PricingCard
        name="Starter"
        description="Perfect for side projects"
        price={0}
        period="/month"
        features={features}
        cta="Get started free"
        className="w-64"
      />
      <PricingCard
        name="Pro"
        description="For growing teams"
        price={29}
        period="/month"
        features={proFeatures}
        cta="Start free trial"
        highlighted
        badge="Most popular"
        className="w-64"
      />
    </div>
  )
}
