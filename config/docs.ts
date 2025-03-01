import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "Next.js",
              href: `/docs/installation/next`,
              items: [],
            },
            {
              title: "Vite",
              href: `/docs/installation/vite`,
              items: [],
            },
            {
              title: "Remix",
              href: `/docs/installation/remix`,
              items: [],
            },
            {
              title: "Astro",
              href: `/docs/installation/astro`,
              items: [],
            },
            {
              title: "Laravel",
              href: `/docs/installation/laravel`,
              items: [],
            },
            {
              title: "Gatsby",
              href: `/docs/installation/gatsby`,
              items: [],
            },
            {
              title: "Manual",
              href: `/docs/installation/manual`,
              items: [],
            },
          ],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
      ],
    },
    /*{
      title: "Templates",
      items: [
        {
          title: "Dev Tool",
          href: `/docs/templates/devtool`,
          items: [],
          label: "New",
          paid: true,
          event: "template_devtool_clicked",
        },
        {
          title: "Mobile",
          href: `/docs/templates/mobile`,
          items: [],
          label: "",
          paid: true,
          event: "template_mobile_clicked",
        },
        {
          title: "SaaS",
          href: `/docs/templates/saas`,
          items: [],
          label: "",
          paid: true,
          event: "template_saas_clicked",
        },

        {
          title: "Startup",
          href: `/docs/templates/startup`,
          items: [],
          label: "",
          paid: true,
          event: "template_startup_clicked",
        },
        {
          title: "Portfolio",
          href: `/docs/templates/portfolio`,
          items: [],
          label: "",
          event: "template_portfolio_clicked",
        },
      ],
    },*/
    {
      title: "Components",
      items: [
        /*{
          title: "Marquee",
          href: `/docs/components/marquee`,
          items: [],
        },
        {
          title: "Terminal",
          href: `/docs/components/terminal`,
          items: [],
          label: "New",
        },
        {
          title: "Hero Video Dialog",
          href: `/docs/components/hero-video-dialog`,
          items: [],
          label: "",
        },
        {
          title: "Bento Grid",
          href: `/docs/components/bento-grid`,
          items: [],
        },
        {
          title: "Animated List",
          href: `/docs/components/animated-list`,
          items: [],
        },
        {

          title: "Dock",
          href: `/docs/components/dock`,
          items: [],
          label: "",
        },*/
        {
          title: "Link Reveal",
          href: `/docs/components/link-reveal`,
          items: [],
          label: "New",
        },
        {
          title: "Count Up Stats",
          href: `/docs/components/count-up-stats`,

        }
       /* {
          title: "Globe",
          href: `/docs/components/globe`,
          items: [],
        },
        {
          title: "Tweet Card",
          href: `/docs/components/tweet-card`,
          items: [],
        },
        {
          title: "Orbiting Circles",
          href: `/docs/components/orbiting-circles`,
          items: [],
          label: "",
        },

        {
          title: "Avatar Circles",
          href: `/docs/components/avatar-circles`,
          items: [],
          label: "",
        },
        {
          title: "Icon Cloud",
          href: `/docs/components/icon-cloud`,
          items: [],
          label: "",
        },
        {
          title: "Animated Circular Progress Bar",
          href: `/docs/components/animated-circular-progress-bar`,
          items: [],
          label: "",
        },
        {
          title: "File Tree",
          href: `/docs/components/file-tree`,
          items: [],
          label: "",
        },
        {
          title: "Code Comparison",
          href: `/docs/components/code-comparison`,
          items: [],
          label: "",
        },
        {
          title: "Script Copy Button",
          href: `/docs/components/script-copy-btn`,
          items: [],
          label: "",
        },
        {
          title: "Scroll Progress",
          href: `/docs/components/scroll-progress`,
          items: [],
          label: "",
        },
        {
          title: "Lens",
          href: `/docs/components/lens`,
          items: [],
          label: "New",
        },
        {
          title: "Pointer",
          href: `/docs/components/pointer`,
          items: [],
          label: "New",
        },*/
      ],
    },
    {
      title: "Device Mocks",
      items: [
       /* {
          title: "Safari",
          href: `/docs/components/safari`,
          items: [],
          label: "",
        },
        {
          title: "iPhone 15 Pro",
          href: `/docs/components/iphone-15-pro`,
          items: [],
          label: "",
        },
        {
          title: "Android",
          href: `/docs/components/android`,
          items: [],
          label: "",
        },*/
        {
          title: "Floating Phone",
          href: `/docs/components/floating-phone`,
          items: [],
          label: "",
        }
      ],
    },
    {
      title: "Special Effects",
      items: [
       /* {
          title: "Animated Beam",
          href: `/docs/components/animated-beam`,
          items: [],
        },
        {
          title: "Border Beam",
          href: `/docs/components/border-beam`,
          items: [],
        },
        {
          title: "Shine Border",
          href: `/docs/components/shine-border`,
          items: [],
          label: "",
        },
        {
          title: "Magic Card",
          href: `/docs/components/magic-card`,
          items: [],
        },
        {
          title: "Meteors",
          href: `/docs/components/meteors`,
          items: [],
        },
        {
          title: "Neon Gradient Card",
          href: `/docs/components/neon-gradient-card`,
          items: [],
          label: "",
        },
        {
          title: "Confetti",
          href: `/docs/components/confetti`,
          items: [],
          label: "",
        },
        {
          title: "Particles",
          href: `/docs/components/particles`,
          items: [],
          label: "",
        },
        {
          title: "Cool Mode",
          href: `/docs/components/cool-mode`,
          items: [],
          label: "",
        },
        {
          title: "Scratch To Reveal",
          href: `/docs/components/scratch-to-reveal`,
          items: [],
          label: "",
        },*/
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Spinning Text",
          href: `/docs/components/spinning-text`,
        },
        {
          title: "Typewriter Effect",
          href: `/docs/components/typewriter-effect`,

        },
        {
          title: "Text Scramble",
          href: `/docs/components/text-scramble`,
        }
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Shimmer Button",
          href: `/docs/components/shimmer-button`,
          items: [],
        },
        {
          title: "Neu Follow Button",
          href: `/docs/components/neu-button`,
        },
        {
          title: "Hover Button",
          href: `/docs/components/hover-button`,
        }
      ],
    },
    {
      title: "Backgrounds",
      items: [
        {
          title: "Particle Background",
          href: `/docs/components/particle-background`,
        }
      ],
    },
  ],
};
