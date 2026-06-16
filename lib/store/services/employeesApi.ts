import { baseApi } from "../baseApi"

export interface Employee {
  id: string
  name: string
  email: string
  role: string
}

export type CreateEmployeeInput = Omit<Employee, "id">

/**
 * Employee endpoints, injected into the root `baseApi`. Add new feature
 * services as separate files following this same pattern.
 */
export const employeesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "employees",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Employee" as const, id })),
              { type: "Employee" as const, id: "LIST" },
            ]
          : [{ type: "Employee" as const, id: "LIST" }],
    }),

    getEmployee: builder.query<Employee, string>({
      query: (id) => `employees/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Employee", id }],
    }),

    createEmployee: builder.mutation<Employee, CreateEmployeeInput>({
      query: (body) => ({
        url: "employees",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Employee", id: "LIST" }],
    }),

    updateEmployee: builder.mutation<
      Employee,
      Pick<Employee, "id"> & Partial<CreateEmployeeInput>
    >({
      query: ({ id, ...patch }) => ({
        url: `employees/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Employee", id }],
    }),

    deleteEmployee: builder.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Employee", id },
        { type: "Employee", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
})

// Auto-generated, fully-typed React hooks for each endpoint.
export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi
