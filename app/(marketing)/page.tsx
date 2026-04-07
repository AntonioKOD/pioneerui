import { Hero3D }              from "@/components/sections/hero-3d"
import { ComponentShowcase }   from "@/components/sections/component-showcase"
import { HowItWorks }          from "@/components/sections/how-it-works"
import { CTASection }          from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Hero3D />
      <ComponentShowcase />
      <HowItWorks />
      <CTASection />
    </>
  )
}
