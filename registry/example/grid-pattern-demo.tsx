import { GridPatternBackground } from "../pioneerui/grid-pattern"

export default function GridPatternDemo() {
  return (
    <GridPatternBackground
      className="rounded-xl min-h-[320px]"
      squares={[
        [2, 2], [3, 4], [5, 1], [7, 3], [1, 5],
      ]}
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Grid Pattern</h2>
        <p className="text-muted-foreground">Subtle animated CSS grid lines background</p>
      </div>
    </GridPatternBackground>
  )
}
