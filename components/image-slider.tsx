"use client"

import { memo, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { Skeleton } from "@/components/ui/skeleton"

export const ImageSlider = memo(() => {
  return (
    <Suspense fallback={<Skeleton className="size-full" />}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <></>
      </ErrorBoundary>
    </Suspense>
  )
})
