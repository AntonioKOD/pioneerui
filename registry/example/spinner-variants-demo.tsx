import { SpinnerRing, SpinnerDots, SpinnerPulse, SpinnerBars } from "../pioneerui/spinner-variants"

export default function SpinnerVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 p-10">
      <div className="flex flex-col items-center gap-3">
        <SpinnerRing size={32} className="text-primary" />
        <span className="text-xs text-muted-foreground">Ring</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <SpinnerDots size={48} className="text-primary" />
        <span className="text-xs text-muted-foreground">Dots</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <SpinnerPulse size={32} className="text-primary" />
        <span className="text-xs text-muted-foreground">Pulse</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <SpinnerBars size={36} className="text-primary" />
        <span className="text-xs text-muted-foreground">Bars</span>
      </div>
    </div>
  )
}
