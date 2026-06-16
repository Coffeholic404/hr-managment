import { baseApi } from "../baseApi"

export interface SignInRequest {
  username: string
  password: string
}

export interface SignInResponse {
  token: string
  user: {
    username: string
  }
}

/**
 * Auth endpoints injected into the root `baseApi`.
 *
 * NOTE: There is no real backend yet, so `signIn` uses `queryFn` to mock the
 * request — it logs the submitted credentials and resolves with a fake token
 * after a short delay (so loading states are visible). Swap `queryFn` for a
 * normal `query` block once a real endpoint exists:
 *
 *   query: (body) => ({ url: "auth/signin", method: "POST", body })
 */
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      queryFn: async (credentials) => {
        console.log("[signIn] submitted credentials:", credentials)

        // Simulate network latency so loading UI is exercised.
        await new Promise((resolve) => setTimeout(resolve, 800))

        return {
          data: {
            token: "mock-token",
            user: { username: credentials.username },
          },
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const { useSignInMutation } = authApi
