import { ProgressBar, MultiProgressBar } from "../pioneerui/progress-bar"

export default function ProgressBarDemo() {
  return (
    <div className="flex flex-col gap-6 p-8 max-w-md mx-auto">
      <ProgressBar value={65} label="Default" showValue />
      <ProgressBar value={80} variant="gradient" label="Gradient" showValue />
      <ProgressBar value={45} variant="striped" label="Striped" showValue size="lg" />
      <MultiProgressBar
        segments={[
          { value: 45, color: "#6366f1", label: "React" },
          { value: 30, color: "#a855f7", label: "Vue" },
          { value: 25, color: "#ec4899", label: "Svelte" },
        ]}
      />
    </div>
  )
}
