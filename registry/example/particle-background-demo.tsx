import { ParticleBackground } from "@/registry/pioneerui/particle-background";


export default function ParticleBackgroundDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-[#0D001A]">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#00FFE1] via-[#00FF85] to-[#60EFFF] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Particle Bacgkround
        </span>
        <ParticleBackground
          particleCount={100}
          preset="links"
          color="#00FFE1"
          speed={2}
        />
      </div>
    );
    }

