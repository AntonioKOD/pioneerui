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
        path: "registry/magicui/number-ticker.tsx",
        type: "registry:ui",
        target: "components/magicui/number-ticker.tsx",
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
        path: "registry/magicui/animated-shiny-text.tsx",
        type: "registry:ui",
        target: "components/magicui/animated-shiny-text.tsx",
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
        path: "registry/magicui/text-animate.tsx",
        type: "registry:ui",
        target: "components/magicui/text-animate.tsx",
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
  }
];
