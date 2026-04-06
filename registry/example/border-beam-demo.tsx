import { BorderBeamCard } from "../pioneerui/border-beam"

export default function BorderBeamDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <BorderBeamCard className="max-w-sm w-full">
        <h3 className="text-lg font-semibold text-foreground">Border Beam</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          An animated rotating gradient border that brings attention to any card or container.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
            Get started
          </button>
          <button className="rounded-lg border px-3 py-1.5 text-sm font-medium text-foreground">
            Learn more
          </button>
        </div>
      </BorderBeamCard>
    </div>
  )
}
