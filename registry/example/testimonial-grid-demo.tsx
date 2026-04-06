import { TestimonialGrid } from "../pioneerui/testimonial-grid"

const testimonials = [
  { quote: "PioneerUI has the most beautiful animated components I've seen in any library.", name: "Alex Johnson", role: "Senior Engineer", company: "GitHub", rating: 5 },
  { quote: "We ship landing pages 3x faster since adopting PioneerUI. Game changer.", name: "Maria Garcia", role: "Product Designer", company: "Figma", rating: 5 },
  { quote: "The copy-paste workflow is genius. No fighting with npm or config files.", name: "David Kim", role: "CTO", company: "Notion", rating: 5 },
  { quote: "Dark mode, accessibility, TypeScript — it has everything we need.", name: "Emma Wilson", role: "Frontend Lead", company: "Linear", rating: 5 },
  { quote: "Rebuilt our entire marketing site in a weekend. The quality is incredible.", name: "Chris Lee", role: "Indie Maker", company: "Buildspace", rating: 5 },
  { quote: "The Framer Motion integrations are top notch. Smooth and performant.", name: "Priya Patel", role: "Design Engineer", company: "Stripe", rating: 5 },
]

export default function TestimonialGridDemo() {
  return (
    <div className="p-6">
      <TestimonialGrid items={testimonials} columns={3} />
    </div>
  )
}
