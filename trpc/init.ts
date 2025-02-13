import { cache } from "react"
import { headers } from "next/headers"
import { initTRPC, TRPCError } from "@trpc/server"
import { SuperJSON } from "superjson"

const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
})

const t = initTRPC.context<typeof createTRPCContext>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: SuperJSON,
})

export const createTRPCRouter = t.router
