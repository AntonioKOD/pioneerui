import { MarqueeTestimonials } from "../pioneerui/marquee-testimonials"

const testimonials = [
  { quote: "Best component library I've ever used. The animations are buttery smooth.", name: "Alex Johnson", role: "Senior Engineer", company: "GitHub" },
  { quote: "PioneerUI saved us weeks of development time. Absolutely worth it.", name: "Maria Garcia", role: "Product Designer", company: "Figma" },
  { quote: "The quality and attention to detail is remarkable. Our users love the UI.", name: "David Kim", role: "CTO", company: "Notion" },
  { quote: "Copy-paste simplicity meets production-grade quality. Perfect combination.", name: "Emma Wilson", role: "Frontend Lead", company: "Linear" },
  { quote: "I rebuilt our entire landing page in a weekend using PioneerUI components.", name: "Chris Lee", role: "Indie Maker", company: "Buildspace" },
  { quote: "The dark mode support and accessibility are top notch. Highly recommend.", name: "Priya Patel", role: "Design Engineer", company: "Stripe" },
]

export default function MarqueeTestimonialsDemo() {
  return (
    <div className="py-6">
      <MarqueeTestimonials items={testimonials} rows={2} />
    </div>
  )
}
