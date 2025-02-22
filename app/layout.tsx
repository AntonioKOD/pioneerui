import { Analytics } from "@/components/analytics";
import { PHProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fontMono, fontSans } from "@/lib/fonts";
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils";
import { Provider as JotaiProvider } from "jotai";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@/styles/globals.css";
import "@/styles/mdx.css";

import type { Viewport } from "next";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "PioneerUI – Next.js & React Server Components for High-Performance Web Apps",
  description:
    "PioneerUI is a modern, theme-aware component library for Next.js and React Server Components. Build accessible, scalable, and high-performance web apps with ease.",
    keywords: [
      "React",
      "Tailwind CSS",
      "Motion",
      "Landing Page",
      "Components",
      "Next.js",
      "Typescript",
      "Pioneer UI",
      "Component Library",
      "UI Kit",
      "Customizable",
      "Beautiful",
      "Modern",
      "Design",
      "Web Development",
    ],
  url: "https://pioneerui.com",
  ogType: "website",
  ogTitle: "PioneerUI – Next.js & React Server Components for High-Performance Web Apps",
  ogDescription:
    "PioneerUI is a modern, theme-aware component library for Next.js and React Server Components. Build accessible, scalable, and high-performance web apps with ease.",
  ogUrl: "https://pioneerui.com",
  ogSiteName: "PioneerUI",
  ogLocale: "en_US",
  image: absoluteUrl("/og"),
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="us" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <JotaiProvider>
          <PHProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider>
                <SpeedInsights />
                {children}
                <Toaster />
                <Analytics />
              </TooltipProvider>
            </ThemeProvider>
          </PHProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
