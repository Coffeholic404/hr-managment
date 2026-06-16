"use client"

import { useRef } from "react"
import { Provider } from "react-redux"

import { makeStore, type AppStore } from "./store"

/**
 * Client-side Redux provider for the App Router. The store is created once per
 * client using a ref (not in render) so it survives re-renders but is still a
 * fresh instance per request on the server.
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null)

  if (storeRef.current === null) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
