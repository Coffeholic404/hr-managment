import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
} from "@tanstack/react-query"

/**
 * Creates a QueryClient with project-wide defaults.
 *
 * - `staleTime` > 0 avoids an immediate refetch right after server-rendered
 *   data is hydrated on the client.
 * - The `dehydrate` tweak lets us stream pending queries from RSCs.
 */
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1,
        refetchOnWindowFocus: false,
      },
      dehydrate: {
        // Include pending queries in dehydration so prefetched-but-unresolved
        // queries can be streamed from server components.
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined

/**
 * Returns a QueryClient. On the server we always make a fresh one (so state
 * never leaks between requests); in the browser we reuse a singleton so the
 * cache survives re-renders and Suspense boundaries.
 */
export function getQueryClient() {
  if (isServer) return makeQueryClient()
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}
