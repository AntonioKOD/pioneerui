import { siteConfig } from "@/config/site"
import Link from "next/link"
import { Icons } from "@/components/icons"

const FOOTER_LINKS = {
  Product: [
    { label: "Components",  href: "/docs/components" },
    { label: "Docs",        href: "/docs" },
    { label: "CLI",         href: "/docs/cli" },
    { label: "Changelog",   href: "/docs/changelog" },
  ],
  Community: [
    { label: "Browse",      href: "/community" },
    { label: "Submit Component", href: "/submit" },
    { label: "Contributors",href: "/contributors" },
    { label: "Discord",     href: siteConfig.links.discord, external: true },
  ],
  Resources: [
    { label: "Blog",        href: "/blog" },
    { label: "Contributing",href: "/docs/contributing" },
    { label: "GitHub",      href: siteConfig.links.github, external: true },
    { label: "Twitter",     href: siteConfig.links.twitter, external: true },
  ],
}

export function SiteFooter() {
  return (
    <footer className="relative bg-zinc-950">
      {/* Violet→cyan gradient top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="container mx-auto px-4 py-14">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="relative inline-flex items-center gap-2">
              <div className="pointer-events-none absolute -inset-2 rounded-full bg-violet-500/8 blur-lg" />
              <Icons.logo className="relative size-6" />
              <span className="relative font-bold text-white">Pioneer UI</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              The open-source animated component library built for design engineers. Free forever.
            </p>
            {/* Social links */}
            <div className="mt-5 flex gap-3">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                aria-label="GitHub"
                className="text-zinc-500 transition-colors hover:text-violet-400"
              >
                <Icons.gitHub className="size-5" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                aria-label="Twitter / X"
                className="text-zinc-500 transition-colors hover:text-violet-400"
              >
                <Icons.twitter className="size-5" />
              </Link>
              <Link
                href={siteConfig.links.discord}
                target="_blank"
                aria-label="Discord"
                className="text-zinc-500 transition-colors hover:text-violet-400"
              >
                <Icons.discord className="size-5" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400">{heading}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noreferrer" : undefined}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/50 bg-gradient-to-r from-violet-950/10 via-transparent to-cyan-950/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Pioneer UI. MIT License.</p>
          <p>
            Built by{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              codeWithToni
            </Link>
            {" "}· Check{" "}
            <Link
              href="https://codewithtoni.com"
              target="_blank"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              my portfolio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
