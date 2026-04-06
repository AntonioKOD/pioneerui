import { AuroraBackground } from "../pioneerui/aurora-background"

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="rounded-xl min-h-[320px]">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground">Aurora Background</h2>
        <p className="mt-2 text-muted-foreground">A beautiful animated aurora gradient backdrop</p>
      </div>
    </AuroraBackground>
  )
}
