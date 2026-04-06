import { FlipCard } from "../pioneerui/flip-card"

const Front = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    </div>
    <p className="text-lg font-bold">PioneerUI</p>
    <p className="text-center text-sm text-white/70">Hover to reveal</p>
  </div>
)

const Back = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-zinc-900 p-6 text-white">
    <p className="text-sm font-semibold text-violet-400">What you get</p>
    <ul className="space-y-2 text-sm text-zinc-300">
      <li className="flex items-center gap-2">
        <span className="text-green-400">✓</span> 40+ animated components
      </li>
      <li className="flex items-center gap-2">
        <span className="text-green-400">✓</span> CLI install in one command
      </li>
      <li className="flex items-center gap-2">
        <span className="text-green-400">✓</span> Dark mode out of the box
      </li>
      <li className="flex items-center gap-2">
        <span className="text-green-400">✓</span> Full TypeScript support
      </li>
    </ul>
  </div>
)

export default function FlipCardDemo() {
  return (
    <div className="flex items-center justify-center gap-8 p-8 flex-wrap">
      <FlipCard front={<Front />} back={<Back />} trigger="hover" />
      <FlipCard front={<Front />} back={<Back />} trigger="click" />
    </div>
  )
}
