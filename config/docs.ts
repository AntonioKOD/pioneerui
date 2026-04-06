import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs/components",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "Blog",
      href: "/blog",
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
        {
          title: "Contributing",
          href: "/docs/contributing",
          items: [],
          label: "New",
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
        {
          title: "Link Reveal",
          href: `/docs/components/link-reveal`,
          items: [],
        },
        {
          title: "Count Up Stats",
          href: `/docs/components/count-up-stats`,
          items: [],
        },
      ],
    },
    {
      title: "Hero Sections",
      items: [
        {
          title: "Hero Gradient",
          href: `/docs/components/hero-gradient`,
          items: [],
          label: "New",
        },
        {
          title: "Hero Video",
          href: `/docs/components/hero-video`,
          items: [],
          label: "New",
        },
        {
          title: "Announcement Banner",
          href: `/docs/components/announcement-banner`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Backgrounds",
      items: [
        {
          title: "Particle Background",
          href: `/docs/components/particle-background`,
          items: [],
        },
        {
          title: "Aurora Background",
          href: `/docs/components/aurora-background`,
          items: [],
          label: "New",
        },
        {
          title: "Dot Pattern",
          href: `/docs/components/dot-pattern`,
          items: [],
          label: "New",
        },
        {
          title: "Grid Pattern",
          href: `/docs/components/grid-pattern`,
          items: [],
          label: "New",
        },
        {
          title: "Beam Background",
          href: `/docs/components/beam-background`,
          items: [],
          label: "New",
        },
        {
          title: "Noise Texture",
          href: `/docs/components/noise-texture`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Cards",
      items: [
        {
          title: "Glow Card",
          href: `/docs/components/glow-card`,
          items: [],
          label: "New",
        },
        {
          title: "Tilt Card",
          href: `/docs/components/tilt-card`,
          items: [],
          label: "New",
        },
        {
          title: "Feature Card",
          href: `/docs/components/feature-card`,
          items: [],
          label: "New",
        },
        {
          title: "Bento Grid",
          href: `/docs/components/bento-grid`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Special Effects",
      items: [
        {
          title: "Border Beam",
          href: `/docs/components/border-beam`,
          items: [],
          label: "New",
        },
        {
          title: "Magnetic Button",
          href: `/docs/components/magnetic-button`,
          items: [],
          label: "New",
        },
        {
          title: "Meteors",
          href: `/docs/components/meteors`,
          items: [],
          label: "New",
        },
        {
          title: "Neon Button",
          href: `/docs/components/neon-button`,
          items: [],
          label: "New",
        },
        {
          title: "Ripple Button",
          href: `/docs/components/ripple-button`,
          items: [],
          label: "New",
        },
        {
          title: "Flip Card",
          href: `/docs/components/flip-card`,
          items: [],
          label: "New",
        },
        {
          title: "Glass Card",
          href: `/docs/components/glass-card`,
          items: [],
          label: "New",
        },
        {
          title: "Animated Counter",
          href: `/docs/components/animated-counter`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Loaders",
      items: [
        {
          title: "Skeleton Card",
          href: `/docs/components/skeleton-card`,
          items: [],
          label: "New",
        },
        {
          title: "Spinner Variants",
          href: `/docs/components/spinner-variants`,
          items: [],
          label: "New",
        },
        {
          title: "Progress Bar",
          href: `/docs/components/progress-bar`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Testimonials",
      items: [
        {
          title: "Testimonial Card",
          href: `/docs/components/testimonial-card`,
          items: [],
          label: "New",
        },
        {
          title: "Marquee Testimonials",
          href: `/docs/components/marquee-testimonials`,
          items: [],
          label: "New",
        },
        {
          title: "Testimonial Grid",
          href: `/docs/components/testimonial-grid`,
          items: [],
          label: "New",
        },
        {
          title: "Animated Testimonials",
          href: `/docs/components/animated-testimonials`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Pricing",
      items: [
        {
          title: "Pricing Card",
          href: `/docs/components/pricing-card`,
          items: [],
          label: "New",
        },
        {
          title: "Pricing Toggle",
          href: `/docs/components/pricing-toggle`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Navigation",
      items: [
        {
          title: "Fluid Tabs",
          href: `/docs/components/fluid-tabs`,
          items: [],
          label: "New",
        },
        {
          title: "Pill Nav",
          href: `/docs/components/pill-nav`,
          items: [],
          label: "New",
        },
        {
          title: "Breadcrumb Animated",
          href: `/docs/components/breadcrumb-animated`,
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Device Mocks",
      items: [
        {
          title: "Floating Phone",
          href: `/docs/components/floating-phone`,
          items: [],
        },
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Spinning Text",
          href: `/docs/components/spinning-text`,
          items: [],
        },
        {
          title: "Typewriter Effect",
          href: `/docs/components/typewriter-effect`,
          items: [],
        },
        {
          title: "Text Scramble",
          href: `/docs/components/text-scramble`,
          items: [],
        },
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
          items: [],
        },
        {
          title: "Hover Button",
          href: `/docs/components/hover-button`,
          items: [],
        },
      ],
    },
  ],
};
