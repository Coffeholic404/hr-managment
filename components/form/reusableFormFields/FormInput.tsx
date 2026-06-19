"use client"

import * as React from "react"

import { Input } from "@/components/ui/input"
import {
  BaseFieldProps,
  describedBy,
  FieldShell,
  useFieldA11y,
} from "./field-base"

type FormInputProps = BaseFieldProps &
  Omit<
    React.ComponentProps<typeof Input>,
    "name" | "value" | "onChange" | "onBlur" | "required" | "disabled"
  >

/**
 * Text input field. Works for any single-line `type` (text, email, url,
 * number, password, …) — pass `type` through like a native input.
 */
export default function FormInput({
  label,
  description,
  required,
  disabled,
  className,
  ...inputProps
}: FormInputProps) {
  const { field, isInvalid, ids } = useFieldA11y<string>()

  return (
    <FieldShell
      ids={ids}
      isInvalid={isInvalid}
      errors={field.state.meta.errors}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      <Input
        id={ids.control}
        name={field.name}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        disabled={disabled}
        required={required}
        aria-invalid={isInvalid}
        aria-describedby={describedBy(
          description && ids.description,
          isInvalid && ids.error
        )}
        {...inputProps}
      />
    </FieldShell>
  )
}
