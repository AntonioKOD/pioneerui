import { RippleButton } from "../pioneerui/ripple-button"

export default function RippleButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <RippleButton variant="default">Click me</RippleButton>
      <RippleButton variant="outline" rippleColor="rgba(139,92,246,0.3)">
        Outline
      </RippleButton>
      <RippleButton variant="ghost" rippleColor="rgba(99,102,241,0.25)">
        Ghost
      </RippleButton>
    </div>
  )
}
