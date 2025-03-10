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
    registryDependencies: ["https://magicui.design/r/number-ticker"],
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
    registryDependencies: ["https://magicui.design/r/number-ticker"],
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
    registryDependencies: ["https://magicui.design/r/text-animate"],
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
    registryDependencies: ["https://magicui.design/r/text-animate"],
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
];
