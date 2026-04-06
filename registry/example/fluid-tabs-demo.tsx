import { FluidTabs } from "../pioneerui/fluid-tabs"

const tabs = [
  {
    value: "overview",
    label: "Overview",
    content: (
      <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
        This is the overview tab content. Smooth underline indicator animates between tabs.
      </div>
    ),
  },
  {
    value: "analytics",
    label: "Analytics",
    content: (
      <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
        Analytics content goes here. The tab indicator uses Framer Motion layoutId.
      </div>
    ),
  },
  {
    value: "settings",
    label: "Settings",
    content: (
      <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
        Settings content goes here. Tab content fades in smoothly on change.
      </div>
    ),
  },
]

export default function FluidTabsDemo() {
  return (
    <div className="p-6 max-w-lg mx-auto space-y-8">
      <div>
        <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Underline variant</p>
        <FluidTabs tabs={tabs} defaultValue="overview" variant="underline" />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Pill variant</p>
        <FluidTabs tabs={tabs} defaultValue="analytics" variant="pill" />
      </div>
    </div>
  )
}
