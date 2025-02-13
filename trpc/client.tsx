"use client"

import { createQueryClient } from "@/trpc/query-client"
import type { QueryClient } from "@tanstack/react-query"
import { createTRPCReact } from "@trpc/react-query"

let clientQueryClientSingleton: QueryClient | undefined = undefined
