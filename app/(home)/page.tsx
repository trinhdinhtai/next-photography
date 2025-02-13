import { ImageSlider } from "@/components/image-slider"
import {
  PageTransitionContainer,
  PageTransitionItem,
} from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransitionContainer className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left content - Fixed */}
      <PageTransitionItem className="h-[70vh] w-full rounded-xl p-0 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2 lg:p-3">
        <div className="relative h-full w-full">
          <ImageSlider />
        </div>
      </PageTransitionItem>
    </PageTransitionContainer>
  )
}
