import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/**
 * The single root API slice. All feature endpoints are injected into this
 * slice via `injectEndpoints` (see `lib/store/services/*`) so the app ships
 * with exactly one middleware/reducer regardless of how many endpoints exist.
 */
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // Set NEXT_PUBLIC_API_URL in .env.local. Falls back to a relative
    // path so Next.js route handlers under /api keep working out of the box.
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
    prepareHeaders: (headers) => {
      // Example: attach an auth token if one is present.
      // const token = getToken()
      // if (token) headers.set("authorization", `Bearer ${token}`)
      return headers
    },
  }),
  // Tag types used for cache invalidation across endpoints.
  tagTypes: ["Employee"],
  // Endpoints are injected from feature files to keep this file lean.
  endpoints: () => ({}),
})
