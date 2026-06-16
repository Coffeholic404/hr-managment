"use client"

import { useState } from "react"
import { Provider } from "react-redux"

import { makeStore } from "./store"

/**
 * Client-side Redux provider for the App Router. The store is created once per
 * client via a lazy `useState` initializer so it survives re-renders but is
 * still a fresh instance per request on the server.
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState(makeStore)

  return <Provider store={store}>{children}</Provider>
}
