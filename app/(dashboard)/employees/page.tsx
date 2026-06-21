"use client"

import { AlertCircle, Trash2, UserPlus, Users } from "lucide-react"
import { toast } from "sonner"

import {
  useDeleteEmployee,
  useEmployees,
  type Employee,
} from "@/lib/api/employees"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const STATUS_LABELS: Record<Employee["status"], string> = {
  active: "Active",
  on_leave: "On leave",
  invited: "Invited",
}

/**
 * Example page that exercises every TanStack Query state: loading, error,
 * empty, and populated — plus an optimistic delete mutation. Use it as a
 * reference for wiring the data hooks in `lib/api/employees.ts`.
 */
export default function EmployeesPage() {
  const { data: employees, isPending, isError, error, refetch } = useEmployees()

  return (
    <Card dir="ltr" className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="size-5" aria-hidden />
          Employees
        </CardTitle>
        <CardDescription>
          Team directory backed by TanStack Query.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isPending ? (
          <EmployeesSkeleton />
        ) : isError ? (
          <ErrorState message={error.message} onRetry={() => refetch()} />
        ) : employees.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="divide-y divide-border" aria-label="Employees">
            {employees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

function EmployeeRow({ employee }: { employee: Employee }) {
  const deleteEmployee = useDeleteEmployee()

  const handleDelete = () => {
    deleteEmployee.mutate(employee.id, {
      onSuccess: () => toast.success(`Removed ${employee.name}`),
      onError: () => toast.error(`Couldn't remove ${employee.name}`),
    })
  }

  return (
    <li className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <p className="truncate font-medium">{employee.name}</p>
        <p className="truncate text-sm text-muted-foreground">
          {employee.role} • {employee.department}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span className="text-xs text-muted-foreground">
          {STATUS_LABELS[employee.status]}
        </span>
        <Button
          variant="destructive"
          size="icon-sm"
          aria-label={`Remove ${employee.name}`}
          onClick={handleDelete}
          disabled={deleteEmployee.isPending}
        >
          <Trash2 aria-hidden />
        </Button>
      </div>
    </li>
  )
}

function EmployeesSkeleton() {
  return (
    <div className="space-y-3" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading employees…</span>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between gap-4 py-1">
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-56" />
          </div>
          <Skeleton className="size-7 shrink-0 rounded-md" />
        </div>
      ))}
    </div>
  )
}

function ErrorState({
  message,
  onRetry,
}: {
  message: string
  onRetry: () => void
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-3 py-10 text-center"
    >
      <AlertCircle className="size-8 text-destructive" aria-hidden />
      <div>
        <p className="font-medium">Couldn&apos;t load employees</p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      <Button variant="outline" size="sm" onClick={onRetry}>
        Try again
      </Button>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <UserPlus className="size-8 text-muted-foreground" aria-hidden />
      <div>
        <p className="font-medium">No employees yet</p>
        <p className="text-sm text-muted-foreground">
          Add your first team member to see them here.
        </p>
      </div>
    </div>
  )
}
