import { AnimatedTestimonials } from "../pioneerui/animated-testimonials"

const testimonials = [
  {
    quote:
      "PioneerUI completely transformed how we build interfaces. The animated components just work out of the box — our team ships twice as fast now.",
    name: "Sarah Chen",
    designation: "Head of Design at Vercel",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  },
  {
    quote:
      "The CLI install workflow is genius. One command and the component lands in our codebase ready to customize. No fighting with dependencies.",
    name: "Marcus Webb",
    designation: "Senior Engineer at Linear",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Every component is thoughtfully designed with dark mode, accessibility, and animation quality in mind. It's the component library I've always wanted.",
    name: "Aisha Patel",
    designation: "Product Lead at Loom",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
]

export default function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay />
}
