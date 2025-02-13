import { photosRouter } from "./routers/photos"
import { baseProcedure, createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(() => {
    return {
      greeting: `hello tRPC`,
    }
  }),
  photos: photosRouter,
})

export type AppRouter = typeof appRouter
