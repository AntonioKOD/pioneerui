import { MagneticButton } from "../pioneerui/magnetic-button"

export default function MagneticButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-6 p-12">
      <MagneticButton>Hover me</MagneticButton>
      <MagneticButton className="bg-secondary text-secondary-foreground" strength={0.6}>
        Strong pull
      </MagneticButton>
    </div>
  )
}
