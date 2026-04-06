import { MeteorsCard } from "../pioneerui/meteors"

export default function MeteorsDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <MeteorsCard className="max-w-sm w-full">
        <p className="relative z-10 mb-4 text-base font-normal text-zinc-500">
          Shooting meteors fly across any card with a simple wrapper component.
        </p>
        <p className="relative z-10 text-2xl font-bold text-zinc-900 dark:text-white">
          Meteors Effect
        </p>
      </MeteorsCard>
    </div>
  )
}
