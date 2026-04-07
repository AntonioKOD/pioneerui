import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "number-ticker",
    type: "registry:ui",
    title: "Number Ticker",
    description: "Animate numbers to count up or down to a target number",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/number-ticker.tsx",
        type: "registry:ui",
        target: "components/pioneerui/number-ticker.tsx",
      },
    ],
  },
  {
    name: "animated-shiny-text",
    type: "registry:ui",
    title: "Animated Shiny Text",
    description:
      "A light glare effect which pans across text making it appear as if it is shimmering.",
    files: [
      {
        path: "registry/pioneerui/animated-shiny-text.tsx",
        type: "registry:ui",
        target: "components/pioneerui/animated-shiny-text.tsx",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              "shiny-text": "shiny-text 8s infinite",
            },
            keyframes: {
              "shiny-text": {
                "0%, 90%, 100%": {
                  "background-position": "calc(-100% - var(--shiny-width)) 0",
                },
                "30%, 60%": {
                  "background-position": "calc(100% + var(--shiny-width)) 0",
                },
              },
            },
          },
        },
      },
    },
  },
  {
    name: "text-animate",
    type: "registry:ui",
    title: "Text Animate",
    description:
      "A text animation component that animates text using a variety of different animations.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/text-animate.tsx",
        type: "registry:ui",
        target: "components/pioneerui/text-animate.tsx",
      },
    ],
  },
  {
    name: "floating-phone",
    type: "registry:ui",
    title: "Floating Phone",
    description: "A floating phone component",
    files: [
      {
          path: "registry/pioneerui/floating-phone.tsx",
          type: "registry:ui",
          target: "components/pioneerui/floating-phone.tsx",
      }
    ]
  },
  {
    name: "link-reveal",
    type: "registry:ui",
    title: "Link Reveal",
    description: "Link reveal effect",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "registry/pioneerui/link-reveal.tsx",
        type: "registry:ui",
        target: "components/pioneerui/link-reveal.tsx",
      },
    ]
  },
  {
    name: 'shimmer-button',
    type: 'registry:ui',
    title: 'Shimmer Button',
    description: 'A shimmering button component',
    dependencies: ['framer-motion'],
    files: [
      {
        path: 'registry/pioneerui/shimmer-button.tsx',
        type: 'registry:ui',
        target: 'components/pioneerui/shimmer-button.tsx',
      }
    ]
  },
  {
    name: 'hover-links',
    type: 'registry:ui',
    title: 'Hover Links',
    description: 'A collection of links with hover effects',
    dependencies: ['framer-motion'],
    files: [
      {
        path: 'registry/pioneerui/hover-links.tsx',
        type: 'registry:ui',
        target: 'components/pioneerui/hover-links.tsx',
      }
    ]
  },
  {
    name: 'spinning-text',
    type: 'registry:ui',
    title: 'Spinning Text',
    description: 'A spinning text component',
    dependencies: ['framer-motion'],
    files: [
      {
        path: 'registry/pioneerui/spinning-text.tsx',
        type: 'registry:ui',
        target: 'components/pioneerui/spinning-text.tsx',
      }
    ]
  },
  {
    name: 'simple-date-selector',
    type: 'registry:ui',
    title: 'Simple Date Selector',
    description: 'A simple date selector component',
    files: [
      {
        path: 'registry/pioneerui/simple-date-selector.tsx',
        type: 'registry:ui',
        target: 'components/pioneerui/simple-date-selector.tsx',
      }
    ]
  },
  {
    name: "shiny-button",
    type: "registry:ui",
    title: "Shiny Button",
    description: "A shiny button component",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "registry/pioneerui/shiny-button.tsx",
        type: "registry:ui",
        target: "components/pioneerui/shiny-button.tsx",
      }
    ]
  },
  {
    name: "neu-button",
    type: "registry:ui",
    title: "Neu Button",
    description: "A neu button component",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "registry/pioneerui/neu-button.tsx",
        type: "registry:ui",
        target: "components/pioneerui/neu-button.tsx",
      }
    ]
  },
  {
    name: 'countup-stats',
    type: 'registry:ui',
    title: 'Count Up Stats',
    description: 'A count up stats component',
    dependencies: ['react-countup'],
    files: [
      {
        path: 'registry/pioneerui/countup-stats.tsx',
        type: 'registry:ui',
        target: 'components/pioneerui/countup-stats.tsx',
      }
    ]

  },
  {
    name: 'hover-button',
    type: 'registry:ui',
    title: 'Hover Button',
    description: 'A hover button component',
    files: [
      {
        path: 'registry/pioneerui/hover-button.tsx',
        type: 'registry:ui',
        target: 'components/pioneerui/hover-button.tsx',
      }
    ]
  },
  {
    name: "typewriter",
    type: "registry:ui",
    title: "Typewriter",
    description: "A typewriter effect component",
    files: [
      {
        path: "registry/pioneerui/typewriter.tsx",
        type: "registry:ui",
        target: "components/pioneerui/typewriter.tsx",
      }
    ]
  },
  {
    name: "particle-background",
    type: "registry:ui",
    title: "Particle Background",
    description: "A particle background component",
    dependencies: ["react-particles", "tsparticles-slim", "tsparticles-engine"],
    files: [
      {
        path: "registry/pioneerui/particle-background.tsx",
        type: "registry:ui",
        target: "components/pioneerui/particle-background.tsx",
      }
    ]
  },
  {
    name: "text-scramble",
    type: "registry:ui",
    title: "Text Scramble",
    description: "A text scramble effect component",
    files: [
      {
        path: "registry/pioneerui/text-scramble.tsx",
        type: "registry:ui",
        target: "components/pioneerui/text-scramble.tsx",
      }
    ]
  },
  {
    name: "dock",
    type: "registry:ui",
    title: "Dock",
    description: "A dock component",
    files: [
      {
        path: "registry/pioneerui/dock.tsx",
        type: "registry:ui",
        target: "components/pioneerui/dock.tsx",
      }
    ]
  },
  // --- Backgrounds ---
  {
    name: "aurora-background",
    type: "registry:ui",
    title: "Aurora Background",
    description: "Animated aurora-style gradient backdrop using CSS keyframes",
    files: [
      {
        path: "registry/pioneerui/aurora-background.tsx",
        type: "registry:ui",
        target: "components/pioneerui/aurora-background.tsx",
      },
    ],
  },
  {
    name: "dot-pattern",
    type: "registry:ui",
    title: "Dot Pattern",
    description: "Repeating radial-dot SVG background pattern with radial fade mask",
    files: [
      {
        path: "registry/pioneerui/dot-pattern.tsx",
        type: "registry:ui",
        target: "components/pioneerui/dot-pattern.tsx",
      },
    ],
  },
  {
    name: "grid-pattern",
    type: "registry:ui",
    title: "Grid Pattern",
    description: "Subtle SVG grid lines background with optional highlighted squares",
    files: [
      {
        path: "registry/pioneerui/grid-pattern.tsx",
        type: "registry:ui",
        target: "components/pioneerui/grid-pattern.tsx",
      },
    ],
  },
  {
    name: "beam-background",
    type: "registry:ui",
    title: "Beam Background",
    description: "Canvas-based animated light beam sweeps for dark hero sections",
    files: [
      {
        path: "registry/pioneerui/beam-background.tsx",
        type: "registry:ui",
        target: "components/pioneerui/beam-background.tsx",
      },
    ],
  },
  {
    name: "noise-texture",
    type: "registry:ui",
    title: "Noise Texture",
    description: "SVG fractal noise grain overlay with blend modes",
    files: [
      {
        path: "registry/pioneerui/noise-texture.tsx",
        type: "registry:ui",
        target: "components/pioneerui/noise-texture.tsx",
      },
    ],
  },
  // --- Special Effects ---
  {
    name: "border-beam",
    type: "registry:ui",
    title: "Border Beam",
    description: "Animated rotating gradient border that highlights any card or container",
    files: [
      {
        path: "registry/pioneerui/border-beam.tsx",
        type: "registry:ui",
        target: "components/pioneerui/border-beam.tsx",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              "border-beam": "border-beam calc(var(--duration)*1s) linear infinite",
            },
            keyframes: {
              "border-beam": {
                "100%": { "--angle": "360deg" },
              },
            },
          },
        },
      },
    },
  },
  {
    name: "magnetic-button",
    type: "registry:ui",
    title: "Magnetic Button",
    description: "Button that tracks cursor with elastic spring physics",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/magnetic-button.tsx",
        type: "registry:ui",
        target: "components/pioneerui/magnetic-button.tsx",
      },
    ],
  },
  // --- Cards ---
  {
    name: "glow-card",
    type: "registry:ui",
    title: "Glow Card",
    description: "Card with mouse-tracking radial glow via CSS custom properties",
    files: [
      {
        path: "registry/pioneerui/glow-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/glow-card.tsx",
      },
    ],
  },
  {
    name: "tilt-card",
    type: "registry:ui",
    title: "Tilt Card",
    description: "3D perspective tilt on mousemove using Framer Motion spring physics",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/tilt-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/tilt-card.tsx",
      },
    ],
  },
  {
    name: "feature-card",
    type: "registry:ui",
    title: "Feature Card",
    description: "Icon, title, and description layout with optional highlighted variant",
    files: [
      {
        path: "registry/pioneerui/feature-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/feature-card.tsx",
      },
    ],
  },
  {
    name: "bento-grid",
    type: "registry:ui",
    title: "Bento Grid",
    description: "CSS Grid bento layout with variable column/row spanning slots",
    files: [
      {
        path: "registry/pioneerui/bento-grid.tsx",
        type: "registry:ui",
        target: "components/pioneerui/bento-grid.tsx",
      },
    ],
  },
  // --- Loaders ---
  {
    name: "skeleton-card",
    type: "registry:ui",
    title: "Skeleton Card",
    description: "Shimmer-animated skeleton placeholder components",
    files: [
      {
        path: "registry/pioneerui/skeleton-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/skeleton-card.tsx",
      },
    ],
  },
  {
    name: "spinner-variants",
    type: "registry:ui",
    title: "Spinner Variants",
    description: "Collection of loading spinners: ring, dots, pulse, and bars",
    files: [
      {
        path: "registry/pioneerui/spinner-variants.tsx",
        type: "registry:ui",
        target: "components/pioneerui/spinner-variants.tsx",
      },
    ],
  },
  {
    name: "progress-bar",
    type: "registry:ui",
    title: "Progress Bar",
    description: "Animated progress bar with default, gradient, and striped variants",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/progress-bar.tsx",
        type: "registry:ui",
        target: "components/pioneerui/progress-bar.tsx",
      },
    ],
  },
  // --- Testimonials ---
  {
    name: "testimonial-card",
    type: "registry:ui",
    title: "Testimonial Card",
    description: "Quote card with avatar, name, role, company and star rating",
    files: [
      {
        path: "registry/pioneerui/testimonial-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/testimonial-card.tsx",
      },
    ],
  },
  {
    name: "marquee-testimonials",
    type: "registry:ui",
    title: "Marquee Testimonials",
    description: "Infinite-scroll horizontal testimonial strip with optional double row",
    files: [
      {
        path: "registry/pioneerui/marquee-testimonials.tsx",
        type: "registry:ui",
        target: "components/pioneerui/marquee-testimonials.tsx",
      },
    ],
  },
  {
    name: "testimonial-grid",
    type: "registry:ui",
    title: "Testimonial Grid",
    description: "Masonry-style testimonial grid with staggered entrance animations",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/testimonial-grid.tsx",
        type: "registry:ui",
        target: "components/pioneerui/testimonial-grid.tsx",
      },
    ],
  },
  // --- Pricing ---
  {
    name: "pricing-card",
    type: "registry:ui",
    title: "Pricing Card",
    description: "Feature list + CTA pricing tier card with highlighted variant",
    files: [
      {
        path: "registry/pioneerui/pricing-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/pricing-card.tsx",
      },
    ],
  },
  {
    name: "pricing-toggle",
    type: "registry:ui",
    title: "Pricing Toggle",
    description: "Monthly/annual toggle with animated price swap using Framer Motion",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/pricing-toggle.tsx",
        type: "registry:ui",
        target: "components/pioneerui/pricing-toggle.tsx",
      },
    ],
  },
  // --- Navigation ---
  {
    name: "fluid-tabs",
    type: "registry:ui",
    title: "Fluid Tabs",
    description: "Tabs with Framer Motion layout-animated underline or pill indicator",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/fluid-tabs.tsx",
        type: "registry:ui",
        target: "components/pioneerui/fluid-tabs.tsx",
      },
    ],
  },
  {
    name: "pill-nav",
    type: "registry:ui",
    title: "Pill Nav",
    description: "Horizontal navigation with animated pill indicator and badge support",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/pill-nav.tsx",
        type: "registry:ui",
        target: "components/pioneerui/pill-nav.tsx",
      },
    ],
  },
  {
    name: "breadcrumb-animated",
    type: "registry:ui",
    title: "Breadcrumb Animated",
    description: "Staggered breadcrumb reveal animation with overflow truncation",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/breadcrumb-animated.tsx",
        type: "registry:ui",
        target: "components/pioneerui/breadcrumb-animated.tsx",
      },
    ],
  },
  // --- Hero Sections ---
  {
    name: "hero-gradient",
    type: "registry:ui",
    title: "Hero Gradient",
    description: "Full-bleed gradient hero with animated word-by-word headline reveal",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/hero-gradient.tsx",
        type: "registry:ui",
        target: "components/pioneerui/hero-gradient.tsx",
      },
    ],
  },
  {
    name: "hero-video",
    type: "registry:ui",
    title: "Hero Video",
    description: "Video thumbnail with play button that opens a modal player",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/hero-video.tsx",
        type: "registry:ui",
        target: "components/pioneerui/hero-video.tsx",
      },
    ],
  },
  {
    name: "announcement-banner",
    type: "registry:ui",
    title: "Announcement Banner",
    description: "Dismissable top-of-page animated banner with multiple color variants",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/announcement-banner.tsx",
        type: "registry:ui",
        target: "components/pioneerui/announcement-banner.tsx",
      },
    ],
  },
  {
    name: "meteors",
    type: "registry:ui",
    title: "Meteors",
    description: "Shooting meteor effect that flies across cards or backgrounds.",
    dependencies: [],
    files: [
      {
        path: "registry/pioneerui/meteors.tsx",
        type: "registry:ui",
        target: "components/pioneerui/meteors.tsx",
      },
    ],
  },
  {
    name: "animated-testimonials",
    type: "registry:ui",
    title: "Animated Testimonials",
    description: "Stacked card testimonial carousel with word-by-word blur reveal animation.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/animated-testimonials.tsx",
        type: "registry:ui",
        target: "components/pioneerui/animated-testimonials.tsx",
      },
    ],
  },
  {
    name: "neon-button",
    type: "registry:ui",
    title: "Neon Button",
    description: "Glowing neon-bordered button with corner accent animations and multiple color themes.",
    files: [
      {
        path: "registry/pioneerui/neon-button.tsx",
        type: "registry:ui",
        target: "components/pioneerui/neon-button.tsx",
      },
    ],
  },
  {
    name: "glass-card",
    type: "registry:ui",
    title: "Glass Card",
    description: "Frosted glass card with a mouse-following radial glow and shimmer border top.",
    files: [
      {
        path: "registry/pioneerui/glass-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/glass-card.tsx",
      },
    ],
  },
  {
    name: "flip-card",
    type: "registry:ui",
    title: "Flip Card",
    description: "3D CSS flip card that reveals a back face on hover or click.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/flip-card.tsx",
        type: "registry:ui",
        target: "components/pioneerui/flip-card.tsx",
      },
    ],
  },
  {
    name: "ripple-button",
    type: "registry:ui",
    title: "Ripple Button",
    description: "Button with an expanding ripple animation on click, in three variants.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/ripple-button.tsx",
        type: "registry:ui",
        target: "components/pioneerui/ripple-button.tsx",
      },
    ],
  },
  {
    name: "animated-counter",
    type: "registry:ui",
    title: "Animated Counter",
    description: "Number counter that animates into view with easing, supporting prefix, suffix, and decimals.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/pioneerui/animated-counter.tsx",
        type: "registry:ui",
        target: "components/pioneerui/animated-counter.tsx",
      },
    ],
  },
];
