"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { useFieldContext } from "../hooks"

/** A single option for choice-based fields (select, combobox, radio, checkbox group). */
export interface Option {
  label: string
  value: string
  disabled?: boolean
}

/** Props shared by every form field wrapper. */
export interface BaseFieldProps {
  /** Visible label. Omit for a label-less control (provide `aria-label` instead). */
  label?: React.ReactNode
  /** Helper text rendered below the control and wired up via `aria-describedby`. */
  description?: React.ReactNode
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export type FieldOrientation = "vertical" | "horizontal" | "responsive"

/**
 * Derives the common, accessibility-related state for a field from the
 * TanStack Form field context. Centralizing it keeps every wrapper consistent.
 */
export function useFieldA11y<T>() {
  const field = useFieldContext<T>()
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

  const ids = {
    control: field.name,
    description: `${field.name}-description`,
    error: `${field.name}-error`,
  }

  return { field, isInvalid, ids }
}

/** Joins a list of ids into an `aria-describedby` value, keeping only strings. */
export function describedBy(...ids: unknown[]): string | undefined {
  const value = ids.filter((id): id is string => typeof id === "string").join(" ")
  return value.length > 0 ? value : undefined
}

interface FieldShellProps {
  ids: { control: string; description: string; error: string }
  isInvalid: boolean
  errors?: Array<{ message?: string } | undefined>
  label?: React.ReactNode
  description?: React.ReactNode
  required?: boolean
  orientation?: FieldOrientation
  className?: string
  children: React.ReactNode
}

/**
 * Presentational wrapper that lays out label → control → description → error
 * with the right `data-invalid`/`htmlFor`/id wiring. The control itself is
 * passed as `children` so each field stays in charge of its own markup.
 */
export function FieldShell({
  ids,
  isInvalid,
  errors,
  label,
  description,
  required,
  orientation = "vertical",
  className,
  children,
}: FieldShellProps) {
  return (
    <Field
      data-invalid={isInvalid}
      orientation={orientation}
      className={className}
    >
      {label && (
        <FieldLabel htmlFor={ids.control}>
          {label}
          {required && (
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          )}
        </FieldLabel>
      )}
      {children}
      {description && (
        <FieldDescription id={ids.description}>{description}</FieldDescription>
      )}
      {isInvalid && <FieldError id={ids.error} errors={errors} />}
    </Field>
  )
}
