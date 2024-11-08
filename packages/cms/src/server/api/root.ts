import { createCallerFactory, router } from '~/server/api/trpc'
import { tokensRouter } from './routers/tokens'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  tokens: tokensRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.example.hello({ text: "world" });
 *       ^? string = "Hello world"
 */
export const createCaller = createCallerFactory(appRouter)
