"use client"

import { memo, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { Skeleton } from "@/components/ui/skeleton"
import Carousel from "@/components/carousel"

export const ImageSlider = memo(() => {
  return (
    <Suspense fallback={<Skeleton className="size-full" />}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Carousel
          className="absolute left-0 top-0 h-full w-full rounded-xl"
          containerClassName="h-full"
        >
          <></>
        </Carousel>
      </ErrorBoundary>
    </Suspense>
  )
})
