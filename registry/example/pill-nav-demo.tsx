import { PillNav } from "../pioneerui/pill-nav"

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
)

export default function PillNavDemo() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <PillNav
        items={[
          { value: "home", label: "Home", icon: <HomeIcon /> },
          { value: "explore", label: "Explore", icon: <SearchIcon /> },
          { value: "notifications", label: "Alerts", icon: <BellIcon />, badge: 3 },
        ]}
        defaultValue="home"
      />
      <PillNav
        items={[
          { value: "all", label: "All" },
          { value: "backgrounds", label: "Backgrounds" },
          { value: "buttons", label: "Buttons" },
          { value: "cards", label: "Cards" },
        ]}
        defaultValue="all"
        size="sm"
      />
    </div>
  )
}
