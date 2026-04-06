import { FeatureCard, FeatureGrid } from "../pioneerui/feature-card"

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

export default function FeatureCardDemo() {
  return (
    <div className="p-6">
      <FeatureGrid>
        <FeatureCard
          icon={<ZapIcon />}
          title="Lightning Fast"
          description="Optimized for performance with zero runtime overhead and tree-shaking support."
          highlighted
        />
        <FeatureCard
          icon={<ShieldIcon />}
          title="Type Safe"
          description="Full TypeScript support with auto-complete and compile-time error checking."
        />
        <FeatureCard
          icon={<GlobeIcon />}
          title="Accessible"
          description="Built with ARIA attributes and keyboard navigation support out of the box."
        />
      </FeatureGrid>
    </div>
  )
}
