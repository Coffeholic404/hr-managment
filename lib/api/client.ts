/**
 * Tiny typed `fetch` wrapper shared by every data hook.
 *
 * Keeping a single client means auth headers, base URL handling and error
 * normalization live in one place — feature files only describe *what* to
 * fetch, never *how*.
 */

/** Normalized error thrown for any non-2xx response. */
export class ApiError extends Error {
  readonly status: number
  readonly data: unknown

  constructor(message: string, status: number, data?: unknown) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.data = data
  }
}

// Set NEXT_PUBLIC_API_URL in .env.local. Falls back to a relative path so
// Next.js route handlers under /api keep working out of the box.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api"

export interface ApiFetchOptions extends Omit<RequestInit, "body"> {
  /** Plain object — serialized to JSON automatically. */
  body?: unknown
}

export async function apiFetch<T>(
  path: string,
  { body, headers, ...init }: ApiFetchOptions = {},
): Promise<T> {
  const url = `${BASE_URL}/${path.replace(/^\//, "")}`

  const response = await fetch(url, {
    ...init,
    headers: {
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      // Example: attach an auth token if one is present.
      // ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    let data: unknown
    try {
      data = await response.json()
    } catch {
      // Response had no JSON body — fall back to the status text.
    }

    const message =
      (data && typeof data === "object" && "message" in data
        ? String((data as { message: unknown }).message)
        : null) ?? `Request failed with status ${response.status}`

    throw new ApiError(message, response.status, data)
  }

  // 204 No Content (e.g. DELETE) has no body to parse.
  if (response.status === 204) return undefined as T

  return (await response.json()) as T
}
