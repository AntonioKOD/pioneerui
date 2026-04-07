import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "shimmer-button-demo",
    type: "registry:example",
    title: "Shimmer Button Demo",
    description: "Example showing a button with a shimmering light effect.",
    registryDependencies: ["https://pioneerui.com/r/shimmer-button"],
    files: [
      {
        path: "registry/example/shimmer-button-demo.tsx",
        type: "registry:example",
        target: "components/shimmer-button-demo.tsx",
      },
    ],
  },
  {
    name: "number-ticker-demo",
    type: "registry:example",
    title: "Number Ticker Demo",
    description: "Example showing animated counting numbers.",
    registryDependencies: ["https://pioneerui.com/r/number-ticker"],
    files: [
      {
        path: "registry/example/number-ticker-demo.tsx",
        type: "registry:example",
        target: "components/number-ticker-demo.tsx",
      },
    ],
  },
  {
    name: "number-ticker-decimal-demo",
    type: "registry:example",
    title: "Number Ticker Decimal Demo",
    description: "Example showing animated counting decimal numbers.",
    registryDependencies: ["https://pioneerui.com/r/number-ticker"],
    files: [
      {
        path: "registry/example/number-ticker-decimal-demo.tsx",
        type: "registry:example",
        target: "components/number-ticker-decimal-demo.tsx",
      },
    ],
  },
  {
    name: "text-animate-demo-2",
    type: "registry:example",
    title: "Text Animate Demo 2",
    description: "Second example showing various text animations.",
    registryDependencies: ["https://pioneerui.com/r/text-animate"],
    files: [
      {
        path: "registry/example/text-animate-demo-2.tsx",
        type: "registry:example",
        target: "components/text-animate-demo-2.tsx",
      },
    ],
  },
  {
    name: "text-animate-demo-3",
    type: "registry:example",
    title: "Text Animate Demo 3",
    description: "Third example showing various text animations.",
    registryDependencies: ["https://pioneerui.com/r/text-animate"],
    files: [
      {
        path: "registry/example/text-animate-demo-3.tsx",
        type: "registry:example",
        target: "components/text-animate-demo-3.tsx",
      },
    ],
  },
  {
    name: "floating-phone-demo",
    type: "registry:example",
    title: "Floating Phone Demo",
    description: "Example showing a floating phone mockup.",
    registryDependencies: ["https://pioneerui.com/r/floating-phone"],
    files: [
      {
        path: "registry/example/floating-phone-demo.tsx",
        type: "registry:example",
        target: "components/floating-phone-demo.tsx",
      }
    ]
  },
  {
    name: "floating-phone-demo-2",
    type: "registry:example",
    title: "Floating Phone Demo 2",
    description: "Second example showing a floating phone mockup.",
    registryDependencies: ["https://pioneerui.com/r/floating-phone"],
    files: [
      {
        path: "registry/example/floating-phone-demo-2.tsx",
        type: "registry:example",
        target: "components/floating-phone-demo-2.tsx",
      }
    ]
  },
  {
    name: "floating-phone-demo-3",
    type: "registry:example",
    title: "Floating Phone Demo 3",
    description: "Third example showing a floating phone mockup.",
    registryDependencies: ["https://pioneerui.com/r/floating-phone"],
    files: [
      {
        path: "registry/example/floating-phone-demo-3.tsx",
        type: "registry:example",
        target: "components/floating-phone-demo-3.tsx",
      }
    ]
  },
  {
    name: "link-demo",
    type: "registry:example",
    title: "Link Demo",
    description: "Example showing animated link hover effects.",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "registry/example/link-demo.tsx",
        type: "registry:example",
        target: "components/link-demo.tsx",
      }
    ]
  },
{
  name: "hover-link-demo",
  type: "registry:example",
  title: "Hover Link Demo",
  description: "Example showing a collection of links with hover effects.",
  dependencies: ["framer-motion"],
  files: [
    {
      path: "registry/example/hover-link-demo.tsx",
      type: "registry:example",
      target: "components/hover-link-demo.tsx",
    }
  ]
},
{
  name: "spinning-text-demo",
  type: "registry:example",
  title: "Spinning Text Demo",
  description: "Example showing spinning text effect.",
  dependencies: ["framer-motion"],
  files: [
    {
      path: "registry/example/spinning-text-demo.tsx",
      type: "registry:example",
      target: "components/spinning-text-demo.tsx",
    }
  ]
},
{
  name: "date-selector-demo",
  type: "registry:example",
  title: "Date Selector Demo",
  description: "Example showing a simple date selector component.",
  dependencies: ["framer-motion"],
  files: [
    {
      path: "registry/example/date-selector-demo.tsx",
      type: "registry:example",
      target: "components/date-selector-demo.tsx",
    }
  ],
},
{
  name: "shiny-button-demo",
  type: "registry:example",
  title: "Shine Button Demo",
  description: "Example showing a button with a shine effect.",
  dependencies: ["framer-motion"],
  files: [
    {
      path: "registry/example/shiny-button-demo.tsx",
      type: "registry:example",
      target: "components/shiny-button-demo.tsx",
    }
  ]
},
{
  name: "neu-button-demo",
  type: "registry:example",
  title: "Neu Button Demo",
  description: "Example showing a button with a neumorphic effect.",
  dependencies: ["framer-motion"],
  files: [
    {
      path: "registry/example/neu-button-demo.tsx",
      type: "registry:example",
      target: "components/neu-button-demo.tsx",
    }
  ]
},
{
  name: "countup-stats-demo",
  type: "registry:example",
  title: "Countup Stats Demo",
  description: "Example showing animated counting numbers.",
  dependencies: ["framer-motion", "@number-flow/react"],
  files: [
    {
      path: "registry/example/countup-stats-demo.tsx",
      type: "registry:example",
      target: "components/countup-stats-demo.tsx",
    }
  ]
},
{
  name: "hover-button-demo",
  type: "registry:example",
  title: "Hover Button Demo",
  description: "Example showing a button with hover effects.",
  files: [
    {
      path: "registry/example/hover-button-demo.tsx",
      type: "registry:example",
      target: "components/hover-button-demo.tsx",
    }
  ]
},
{
  name: "typewriter-demo",
  type: "registry:example",
  title: "Typewriter Demo",
  description: "Example showing a typewriter effect.",
  files: [
    {
      path: "registry/example/typewriter-demo.tsx",
      type: "registry:example",
      target: "components/typewriter-demo.tsx",
    }
  ]
},
{
  name: "particle-background-demo",
  type: "registry:example",
  title: "Particle Background Demo",
  description: "Example showing a particle background effect.",
  files: [
    {
      path: "registry/example/particle-background-demo.tsx",
      type: "registry:example",
      target: "components/particle-background-demo.tsx",
    }
  ]
},
{
  name: 'text-scramble-demo',
  type: 'registry:example',
  title: 'Text Scramble Demo',
  description: 'Example showing a text scramble effect.',
  files: [
    {
      path: 'registry/example/text-scramble-demo.tsx',
      type: 'registry:example',
      target: 'components/text-scramble-demo.tsx',
    }
  ]
},
{
  name: "dock-demo",
  type: "registry:example",
  title: "Dock Demo",
  description: "Example showing a dock component.",
  files: [
    {
      path: "registry/example/dock-demo.tsx",
      type: "registry:example",
      target: "components/dock-demo.tsx",
    }
  ]
},
{
  name: "countup-stats-demo-2",
  type: "registry:example",
  title: "Countup Stats Demo 2",
  description: "Example showing animated counting numbers.",
  files: [
    {
      path: "registry/example/countup-stats-demo-2.tsx",
      type: "registry:example",
      target: "components/countup-stats-demo-2.tsx",
    }
  ]
},
{
  name: "countup-stats-demo-3",
  type: "registry:example",
  title: "Countup Stats Demo 3",
  description: "Example showing animated counting numbers.",
  files: [
    {
      path: "registry/example/countup-stats-demo-3.tsx",
      type: "registry:example",
      target: "components/countup-stats-demo-3.tsx",
    }
  ]
},
// --- New component demos ---
{
  name: "aurora-background-demo",
  type: "registry:example",
  title: "Aurora Background Demo",
  description: "Example showing an animated aurora gradient backdrop.",
  registryDependencies: ["https://pioneerui.com/r/aurora-background"],
  files: [{ path: "registry/example/aurora-background-demo.tsx", type: "registry:example", target: "components/aurora-background-demo.tsx" }],
},
{
  name: "dot-pattern-demo",
  type: "registry:example",
  title: "Dot Pattern Demo",
  description: "Example showing a repeating radial dot pattern background.",
  registryDependencies: ["https://pioneerui.com/r/dot-pattern"],
  files: [{ path: "registry/example/dot-pattern-demo.tsx", type: "registry:example", target: "components/dot-pattern-demo.tsx" }],
},
{
  name: "grid-pattern-demo",
  type: "registry:example",
  title: "Grid Pattern Demo",
  description: "Example showing a subtle SVG grid background.",
  registryDependencies: ["https://pioneerui.com/r/grid-pattern"],
  files: [{ path: "registry/example/grid-pattern-demo.tsx", type: "registry:example", target: "components/grid-pattern-demo.tsx" }],
},
{
  name: "beam-background-demo",
  type: "registry:example",
  title: "Beam Background Demo",
  description: "Example showing canvas-based animated light beams.",
  registryDependencies: ["https://pioneerui.com/r/beam-background"],
  files: [{ path: "registry/example/beam-background-demo.tsx", type: "registry:example", target: "components/beam-background-demo.tsx" }],
},
{
  name: "noise-texture-demo",
  type: "registry:example",
  title: "Noise Texture Demo",
  description: "Example showing an SVG fractal noise grain overlay.",
  registryDependencies: ["https://pioneerui.com/r/noise-texture"],
  files: [{ path: "registry/example/noise-texture-demo.tsx", type: "registry:example", target: "components/noise-texture-demo.tsx" }],
},
{
  name: "border-beam-demo",
  type: "registry:example",
  title: "Border Beam Demo",
  description: "Example showing an animated rotating gradient border.",
  registryDependencies: ["https://pioneerui.com/r/border-beam"],
  files: [{ path: "registry/example/border-beam-demo.tsx", type: "registry:example", target: "components/border-beam-demo.tsx" }],
},
{
  name: "magnetic-button-demo",
  type: "registry:example",
  title: "Magnetic Button Demo",
  description: "Example showing a button with magnetic cursor tracking.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/magnetic-button"],
  files: [{ path: "registry/example/magnetic-button-demo.tsx", type: "registry:example", target: "components/magnetic-button-demo.tsx" }],
},
{
  name: "glow-card-demo",
  type: "registry:example",
  title: "Glow Card Demo",
  description: "Example showing cards with mouse-tracking radial glow.",
  registryDependencies: ["https://pioneerui.com/r/glow-card"],
  files: [{ path: "registry/example/glow-card-demo.tsx", type: "registry:example", target: "components/glow-card-demo.tsx" }],
},
{
  name: "tilt-card-demo",
  type: "registry:example",
  title: "Tilt Card Demo",
  description: "Example showing a card with 3D perspective tilt effect.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/tilt-card"],
  files: [{ path: "registry/example/tilt-card-demo.tsx", type: "registry:example", target: "components/tilt-card-demo.tsx" }],
},
{
  name: "feature-card-demo",
  type: "registry:example",
  title: "Feature Card Demo",
  description: "Example showing feature cards with icon, title, and description.",
  registryDependencies: ["https://pioneerui.com/r/feature-card"],
  files: [{ path: "registry/example/feature-card-demo.tsx", type: "registry:example", target: "components/feature-card-demo.tsx" }],
},
{
  name: "bento-grid-demo",
  type: "registry:example",
  title: "Bento Grid Demo",
  description: "Example showing a bento grid layout with variable spanning.",
  registryDependencies: ["https://pioneerui.com/r/bento-grid"],
  files: [{ path: "registry/example/bento-grid-demo.tsx", type: "registry:example", target: "components/bento-grid-demo.tsx" }],
},
{
  name: "skeleton-card-demo",
  type: "registry:example",
  title: "Skeleton Card Demo",
  description: "Example showing shimmer skeleton loading placeholders.",
  registryDependencies: ["https://pioneerui.com/r/skeleton-card"],
  files: [{ path: "registry/example/skeleton-card-demo.tsx", type: "registry:example", target: "components/skeleton-card-demo.tsx" }],
},
{
  name: "spinner-variants-demo",
  type: "registry:example",
  title: "Spinner Variants Demo",
  description: "Example showing ring, dots, pulse, and bars loading spinners.",
  registryDependencies: ["https://pioneerui.com/r/spinner-variants"],
  files: [{ path: "registry/example/spinner-variants-demo.tsx", type: "registry:example", target: "components/spinner-variants-demo.tsx" }],
},
{
  name: "progress-bar-demo",
  type: "registry:example",
  title: "Progress Bar Demo",
  description: "Example showing animated progress bars with multiple variants.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/progress-bar"],
  files: [{ path: "registry/example/progress-bar-demo.tsx", type: "registry:example", target: "components/progress-bar-demo.tsx" }],
},
{
  name: "testimonial-card-demo",
  type: "registry:example",
  title: "Testimonial Card Demo",
  description: "Example showing testimonial cards with three style variants.",
  registryDependencies: ["https://pioneerui.com/r/testimonial-card"],
  files: [{ path: "registry/example/testimonial-card-demo.tsx", type: "registry:example", target: "components/testimonial-card-demo.tsx" }],
},
{
  name: "marquee-testimonials-demo",
  type: "registry:example",
  title: "Marquee Testimonials Demo",
  description: "Example showing an infinite-scroll testimonial marquee.",
  registryDependencies: ["https://pioneerui.com/r/marquee-testimonials"],
  files: [{ path: "registry/example/marquee-testimonials-demo.tsx", type: "registry:example", target: "components/marquee-testimonials-demo.tsx" }],
},
{
  name: "testimonial-grid-demo",
  type: "registry:example",
  title: "Testimonial Grid Demo",
  description: "Example showing a testimonial grid with stagger animations.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/testimonial-grid"],
  files: [{ path: "registry/example/testimonial-grid-demo.tsx", type: "registry:example", target: "components/testimonial-grid-demo.tsx" }],
},
{
  name: "pricing-card-demo",
  type: "registry:example",
  title: "Pricing Card Demo",
  description: "Example showing pricing tier cards with highlighted variant.",
  registryDependencies: ["https://pioneerui.com/r/pricing-card"],
  files: [{ path: "registry/example/pricing-card-demo.tsx", type: "registry:example", target: "components/pricing-card-demo.tsx" }],
},
{
  name: "pricing-toggle-demo",
  type: "registry:example",
  title: "Pricing Toggle Demo",
  description: "Example showing monthly/annual pricing toggle with animated prices.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/pricing-toggle"],
  files: [{ path: "registry/example/pricing-toggle-demo.tsx", type: "registry:example", target: "components/pricing-toggle-demo.tsx" }],
},
{
  name: "fluid-tabs-demo",
  type: "registry:example",
  title: "Fluid Tabs Demo",
  description: "Example showing tabs with animated underline and pill indicators.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/fluid-tabs"],
  files: [{ path: "registry/example/fluid-tabs-demo.tsx", type: "registry:example", target: "components/fluid-tabs-demo.tsx" }],
},
{
  name: "pill-nav-demo",
  type: "registry:example",
  title: "Pill Nav Demo",
  description: "Example showing a pill navigation with animated indicator.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/pill-nav"],
  files: [{ path: "registry/example/pill-nav-demo.tsx", type: "registry:example", target: "components/pill-nav-demo.tsx" }],
},
{
  name: "breadcrumb-animated-demo",
  type: "registry:example",
  title: "Breadcrumb Animated Demo",
  description: "Example showing staggered breadcrumb reveal animation.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/breadcrumb-animated"],
  files: [{ path: "registry/example/breadcrumb-animated-demo.tsx", type: "registry:example", target: "components/breadcrumb-animated-demo.tsx" }],
},
{
  name: "hero-gradient-demo",
  type: "registry:example",
  title: "Hero Gradient Demo",
  description: "Example showing a full-bleed gradient hero section.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/hero-gradient"],
  files: [{ path: "registry/example/hero-gradient-demo.tsx", type: "registry:example", target: "components/hero-gradient-demo.tsx" }],
},
{
  name: "hero-video-demo",
  type: "registry:example",
  title: "Hero Video Demo",
  description: "Example showing a video thumbnail with modal player.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/hero-video"],
  files: [{ path: "registry/example/hero-video-demo.tsx", type: "registry:example", target: "components/hero-video-demo.tsx" }],
},
{
  name: "announcement-banner-demo",
  type: "registry:example",
  title: "Announcement Banner Demo",
  description: "Example showing dismissable announcement banners.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/announcement-banner"],
  files: [{ path: "registry/example/announcement-banner-demo.tsx", type: "registry:example", target: "components/announcement-banner-demo.tsx" }],
},
{
  name: "meteors-demo",
  type: "registry:example",
  title: "Meteors Demo",
  description: "Example showing the meteor shooting effect on a card.",
  registryDependencies: ["https://pioneerui.com/r/meteors"],
  files: [{ path: "registry/example/meteors-demo.tsx", type: "registry:example", target: "components/meteors-demo.tsx" }],
},
{
  name: "animated-testimonials-demo",
  type: "registry:example",
  title: "Animated Testimonials Demo",
  description: "Example showing stacked testimonial cards with blur reveal.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/animated-testimonials"],
  files: [{ path: "registry/example/animated-testimonials-demo.tsx", type: "registry:example", target: "components/animated-testimonials-demo.tsx" }],
},
{
  name: "neon-button-demo",
  type: "registry:example",
  title: "Neon Button Demo",
  description: "Example showing neon glowing buttons in five color themes.",
  registryDependencies: ["https://pioneerui.com/r/neon-button"],
  files: [{ path: "registry/example/neon-button-demo.tsx", type: "registry:example", target: "components/neon-button-demo.tsx" }],
},
{
  name: "glass-card-demo",
  type: "registry:example",
  title: "Glass Card Demo",
  description: "Example showing a frosted glass card with mouse-following glow.",
  registryDependencies: ["https://pioneerui.com/r/glass-card"],
  files: [{ path: "registry/example/glass-card-demo.tsx", type: "registry:example", target: "components/glass-card-demo.tsx" }],
},
{
  name: "flip-card-demo",
  type: "registry:example",
  title: "Flip Card Demo",
  description: "Example showing hover and click 3D flip card.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/flip-card"],
  files: [{ path: "registry/example/flip-card-demo.tsx", type: "registry:example", target: "components/flip-card-demo.tsx" }],
},
{
  name: "ripple-button-demo",
  type: "registry:example",
  title: "Ripple Button Demo",
  description: "Example showing click ripple effect across three button variants.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/ripple-button"],
  files: [{ path: "registry/example/ripple-button-demo.tsx", type: "registry:example", target: "components/ripple-button-demo.tsx" }],
},
{
  name: "animated-counter-demo",
  type: "registry:example",
  title: "Animated Counter Demo",
  description: "Example showing a stat card with scroll-triggered animated counters.",
  dependencies: ["motion"],
  registryDependencies: ["https://pioneerui.com/r/animated-counter"],
  files: [{ path: "registry/example/animated-counter-demo.tsx", type: "registry:example", target: "components/animated-counter-demo.tsx" }],
},
];
