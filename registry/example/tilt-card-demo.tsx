import { TiltCard } from "../pioneerui/tilt-card"

export default function TiltCardDemo() {
  return (
    <div className="flex items-center justify-center p-12">
      <TiltCard className="max-w-xs w-full">
        <div className="space-y-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="h-5 w-5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3 className="text-base font-semibold text-foreground">Tilt Effect</h3>
          <p className="text-sm text-muted-foreground">
            Hover to see a smooth 3D perspective tilt powered by Framer Motion.
          </p>
        </div>
      </TiltCard>
    </div>
  )
}
