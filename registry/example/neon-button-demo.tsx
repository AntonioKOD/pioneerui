import { NeonButton } from "../pioneerui/neon-button"

export default function NeonButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-8 bg-zinc-950 rounded-xl">
      <NeonButton color="purple">Launch</NeonButton>
      <NeonButton color="cyan">Connect</NeonButton>
      <NeonButton color="green">Deploy</NeonButton>
      <NeonButton color="pink">Subscribe</NeonButton>
      <NeonButton color="orange">Ignite</NeonButton>
    </div>
  )
}
