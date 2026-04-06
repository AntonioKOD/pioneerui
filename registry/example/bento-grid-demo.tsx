import { BentoGrid, BentoCard } from "../pioneerui/bento-grid"

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

export default function BentoGridDemo() {
  return (
    <div className="p-6">
      <BentoGrid>
        <BentoCard
          colSpan={2}
          name="Component Library"
          description="25+ animated, accessible components ready to copy and install."
          icon={<LayersIcon />}
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
          }
        />
        <BentoCard
          name="Open Source"
          description="Free to use, fully customizable MIT licensed."
          icon={<StarIcon />}
        />
        <BentoCard
          name="Copy & Paste"
          description="No npm install needed — just copy the code."
          icon={<CodeIcon />}
        />
        <BentoCard
          colSpan={2}
          name="Design System"
          description="Consistent tokens, dark mode, and Tailwind CSS 4 support."
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10" />
          }
        />
      </BentoGrid>
    </div>
  )
}
