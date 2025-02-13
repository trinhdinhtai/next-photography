import { baseProcedure, createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(() => {
    return {
      greeting: `hello tRPC`,
    }
  }),
})

export type AppRouter = typeof appRouter
