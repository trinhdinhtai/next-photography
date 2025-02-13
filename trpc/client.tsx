"use client"

import { createQueryClient } from "@/trpc/query-client"
import type { QueryClient } from "@tanstack/react-query"
import { createTRPCReact } from "@trpc/react-query"

import { AppRouter } from "./root"

let clientQueryClientSingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient()
  } else {
    // Browser: use singleton pattern to keep the same query client
    return (clientQueryClientSingleton ??= createQueryClient())
  }
}
export const api = createTRPCReact<AppRouter>()
