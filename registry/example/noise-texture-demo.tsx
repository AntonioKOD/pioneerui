import { NoiseTexture } from "../pioneerui/noise-texture"

export default function NoiseTextureDemo() {
  return (
    <NoiseTexture className="rounded-xl min-h-[320px] bg-gradient-to-br from-violet-900 to-indigo-900">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Noise Texture</h2>
        <p className="text-white/60">SVG fractal noise grain overlay</p>
      </div>
    </NoiseTexture>
  )
}
