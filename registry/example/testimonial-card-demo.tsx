import { TestimonialCard } from "../pioneerui/testimonial-card"

export default function TestimonialCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 max-w-4xl mx-auto">
      <TestimonialCard
        quote="PioneerUI has completely transformed how we build landing pages. The components are stunning."
        name="Sarah Chen"
        role="Lead Designer"
        company="Vercel"
        rating={5}
        variant="default"
      />
      <TestimonialCard
        quote="The best component library I've used. Copy-paste simplicity with production quality."
        name="Marcus Rivera"
        role="Frontend Engineer"
        company="Stripe"
        rating={5}
        variant="bordered"
      />
      <TestimonialCard
        quote="Saved our team dozens of hours. The animation quality is unmatched."
        name="Aiko Tanaka"
        role="CTO"
        company="Linear"
        rating={5}
        variant="elevated"
      />
    </div>
  )
}
