import { BreadcrumbAnimated } from "../pioneerui/breadcrumb-animated"

export default function BreadcrumbAnimatedDemo() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <BreadcrumbAnimated
        items={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/docs/components" },
          { label: "Breadcrumb Animated" },
        ]}
      />
      <BreadcrumbAnimated
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Installation", href: "/docs/installation" },
          { label: "Next.js", href: "/docs/installation/next" },
          { label: "App Router" },
        ]}
        maxVisible={3}
      />
    </div>
  )
}
