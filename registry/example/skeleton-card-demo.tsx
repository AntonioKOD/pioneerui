import { SkeletonCard, SkeletonList } from "../pioneerui/skeleton-card"

export default function SkeletonCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 max-w-2xl mx-auto">
      <SkeletonCard />
      <div className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground">List skeleton</p>
        <SkeletonList rows={3} />
      </div>
    </div>
  )
}
