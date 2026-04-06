import { BeamBackground } from "../pioneerui/beam-background"

export default function BeamBackgroundDemo() {
  return (
    <BeamBackground className="rounded-xl min-h-[320px]">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Beam Background</h2>
        <p className="text-white/60">Canvas-based animated light beam effects</p>
      </div>
    </BeamBackground>
  )
}
