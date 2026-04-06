import { Hero3D }              from "@/components/sections/hero-3d"
import { StatsBar }            from "@/components/sections/stats-bar"
import { ComponentShowcase }   from "@/components/sections/component-showcase"
import { HowItWorks }          from "@/components/sections/how-it-works"
import { CommunitySpotlight }  from "@/components/sections/community-spotlight"
import { CTASection }          from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Hero3D />
      <StatsBar />
      <ComponentShowcase />
      <HowItWorks />
      <CommunitySpotlight />
      <CTASection />
    </>
  )
}
