"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { getQueryClient } from "./get-query-client"

/**
 * Client-side TanStack Query provider for the App Router. Mirrors the previous
 * Redux `StoreProvider`: a single cache shared across the client tree.
 *
 * NOTE: `getQueryClient()` returns a per-request instance on the server and a
 * stable singleton in the browser, so we intentionally do *not* wrap it in
 * `useState` here.
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      )}
    </QueryClientProvider>
  )
}
