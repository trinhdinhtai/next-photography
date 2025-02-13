import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface CarouselProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  autoplayDelay?: number
}

export default function Carousel({
  children,
  className,
  containerClassName,
  autoplayDelay,
}: CarouselProps) {
  return (
    <div className={cn("relative overflow-hidden")}>
      <div className={cn("flex", "containerClassName")}>{children}</div>
    </div>
  )
}
