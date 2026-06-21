import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"

export interface Employee {
  id: string
  name: string
  email: string
  role: string
  department: string
  status: "active" | "on_leave" | "invited"
}

export type CreateEmployeeInput = Omit<Employee, "id">
export type UpdateEmployeeInput = Pick<Employee, "id"> &
  Partial<CreateEmployeeInput>

/**
 * Centralized query-key factory. Using a factory (instead of inline string
 * arrays) keeps keys consistent and makes targeted invalidation trivial:
 *
 *   queryClient.invalidateQueries({ queryKey: employeeKeys.lists() })
 */
export const employeeKeys = {
  all: ["employees"] as const,
  lists: () => [...employeeKeys.all, "list"] as const,
  list: (filters: Record<string, unknown> = {}) =>
    [...employeeKeys.lists(), filters] as const,
  details: () => [...employeeKeys.all, "detail"] as const,
  detail: (id: string) => [...employeeKeys.details(), id] as const,
}

/* -------------------------------------------------------------------------- */
/* Mock data layer                                                            */
/* -------------------------------------------------------------------------- */
/**
 * In-memory store standing in for a real API. Replace each function body with a
 * call to `apiFetch` (see lib/api/client.ts) when a backend is available, e.g.:
 *
 *   const fetchEmployees = () => apiFetch<Employee[]>("employees")
 */
let mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Ada Lovelace",
    email: "ada@company.com",
    role: "Principal Engineer",
    department: "Engineering",
    status: "active",
  },
  {
    id: "2",
    name: "Grace Hopper",
    email: "grace@company.com",
    role: "Engineering Manager",
    department: "Engineering",
    status: "active",
  },
  {
    id: "3",
    name: "Katherine Johnson",
    email: "katherine@company.com",
    role: "Data Scientist",
    department: "Product",
    status: "on_leave",
  },
]

const delay = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchEmployees(): Promise<Employee[]> {
  await delay()
  return [...mockEmployees]
}

async function fetchEmployee(id: string): Promise<Employee> {
  await delay(400)
  const employee = mockEmployees.find((e) => e.id === id)
  if (!employee) throw new Error(`Employee ${id} not found`)
  return employee
}

async function createEmployee(input: CreateEmployeeInput): Promise<Employee> {
  await delay()
  const employee: Employee = { id: crypto.randomUUID(), ...input }
  mockEmployees = [...mockEmployees, employee]
  return employee
}

async function updateEmployee({
  id,
  ...patch
}: UpdateEmployeeInput): Promise<Employee> {
  await delay()
  mockEmployees = mockEmployees.map((e) =>
    e.id === id ? { ...e, ...patch } : e,
  )
  const updated = mockEmployees.find((e) => e.id === id)
  if (!updated) throw new Error(`Employee ${id} not found`)
  return updated
}

async function deleteEmployee(id: string): Promise<{ id: string }> {
  await delay()
  mockEmployees = mockEmployees.filter((e) => e.id !== id)
  return { id }
}

/* -------------------------------------------------------------------------- */
/* Hooks                                                                       */
/* -------------------------------------------------------------------------- */

/** List all employees. */
export function useEmployees() {
  return useQuery({
    queryKey: employeeKeys.list(),
    queryFn: fetchEmployees,
  })
}

/** Fetch a single employee. Disabled until an id is provided. */
export function useEmployee(id: string | undefined) {
  return useQuery({
    queryKey: employeeKeys.detail(id ?? ""),
    queryFn: () => fetchEmployee(id as string),
    enabled: Boolean(id),
  })
}

/** Create an employee, then refresh the list. */
export function useCreateEmployee() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() })
    },
  })
}

/** Update an employee, then refresh both the list and that detail. */
export function useUpdateEmployee() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateEmployee,
    onSuccess: (employee) => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() })
      queryClient.invalidateQueries({
        queryKey: employeeKeys.detail(employee.id),
      })
    },
  })
}

/**
 * Delete an employee with an optimistic update — the row disappears instantly
 * and is rolled back if the request fails.
 */
export function useDeleteEmployee() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteEmployee,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: employeeKeys.lists() })
      const previous = queryClient.getQueryData<Employee[]>(
        employeeKeys.list(),
      )
      queryClient.setQueryData<Employee[]>(employeeKeys.list(), (old) =>
        old?.filter((e) => e.id !== id),
      )
      return { previous }
    },
    onError: (_error, _id, context) => {
      // Roll back to the snapshot taken in onMutate.
      if (context?.previous) {
        queryClient.setQueryData(employeeKeys.list(), context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() })
    },
  })
}
