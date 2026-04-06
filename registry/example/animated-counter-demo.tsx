import { StatCard } from "../pioneerui/animated-counter"

export default function AnimatedCounterDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <StatCard
        className="w-full max-w-2xl"
        stats={[
          { label: "Components", value: 45, suffix: "+" },
          { label: "GitHub Stars", value: 3200, suffix: "+" },
          { label: "Downloads", value: 18500, suffix: "+" },
          { label: "Contributors", value: 94, suffix: "+" },
        ]}
      />
    </div>
  )
}
