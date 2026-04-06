import { GlassCard } from "../pioneerui/glass-card"

export default function GlassCardDemo() {
  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-br from-violet-950 via-zinc-950 to-indigo-950 rounded-xl min-h-[300px]">
      <GlassCard className="max-w-sm w-full" tint="rgba(139,92,246,0.4)">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <svg className="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">Glass Card</h3>
        <p className="mt-2 text-sm text-white/60">
          A frosted glass surface with a mouse-following glow effect. Move your cursor over the card to see it in action.
        </p>
        <button className="mt-4 rounded-lg bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-500/30">
          Explore →
        </button>
      </GlassCard>
    </div>
  )
}
