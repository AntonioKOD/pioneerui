import { HeroVideo } from "../pioneerui/hero-video"

export default function HeroVideoDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HeroVideo
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        thumbnailSrc="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80"
        thumbnailAlt="Product demo video"
        buttonText="Watch demo"
        animationStyle="from-center"
        className="max-w-2xl w-full aspect-video"
      />
    </div>
  )
}
