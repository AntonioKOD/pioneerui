import { AnnouncementBanner } from "../pioneerui/announcement-banner"

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
)

export default function AnnouncementBannerDemo() {
  return (
    <div className="flex flex-col gap-4">
      <AnnouncementBanner
        message="PioneerUI v2.0 is here with 25+ new components!"
        href="/docs"
        cta="See what's new"
        variant="default"
        dismissible
      />
      <AnnouncementBanner
        message="🎉 PioneerUI Pro is now available — one-time purchase, lifetime access."
        href="/pricing"
        cta="Learn more"
        variant="primary"
        dismissible
        icon={<SparkleIcon />}
      />
      <AnnouncementBanner
        message="Maintenance scheduled for Sunday 2AM UTC."
        variant="warning"
        dismissible={false}
      />
    </div>
  )
}
