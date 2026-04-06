import { DotPatternBackground } from "../pioneerui/dot-pattern"

export default function DotPatternDemo() {
  return (
    <DotPatternBackground className="rounded-xl min-h-[320px]">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Dot Pattern</h2>
        <p className="text-muted-foreground">Subtle radial dot grid background</p>
      </div>
    </DotPatternBackground>
  )
}
