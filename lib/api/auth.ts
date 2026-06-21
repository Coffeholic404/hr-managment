import { useMutation } from "@tanstack/react-query"

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
 * NOTE: There is no real backend yet, so `signIn` is mocked — it logs the
 * submitted credentials and resolves with a fake token after a short delay (so
 * loading states are visible). Swap the body for a real call once an endpoint
 * exists:
 *
 *   import { apiFetch } from "./client"
 *   export const signIn = (body: SignInRequest) =>
 *     apiFetch<SignInResponse>("auth/signin", { method: "POST", body })
 */
async function signIn(credentials: SignInRequest): Promise<SignInResponse> {
  console.log("[signIn] submitted credentials:", credentials)

  // Simulate network latency so loading UI is exercised.
  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    token: "mock-token",
    user: { username: credentials.username },
  }
}

/**
 * Sign-in mutation hook. Replaces the old RTK `useSignInMutation`.
 *
 * @example
 * const { mutateAsync, isPending, isSuccess } = useSignIn()
 * await mutateAsync({ username, password })
 */
export function useSignIn() {
  return useMutation({
    mutationFn: signIn,
  })
}
