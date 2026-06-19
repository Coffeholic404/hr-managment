"use client"

import * as React from "react"

import { Textarea } from "@/components/ui/textarea"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  BaseFieldProps,
  describedBy,
  FieldShell,
  useFieldA11y,
} from "./field-base"

type FormTextareaProps = BaseFieldProps &
  Omit<
    React.ComponentProps<typeof Textarea>,
    "name" | "value" | "onChange" | "onBlur" | "required" | "disabled"
  > & {
    /** When set together with `maxLength`, shows a live `x / max` counter. */
    showCount?: boolean
  }

/**
 * Multi-line text field. Pass `maxLength` + `showCount` to render a live
 * character counter inside the control.
 */
export default function FormTextarea({
  label,
  description,
  required,
  disabled,
  className,
  showCount,
  maxLength,
  ...textareaProps
}: FormTextareaProps) {
  const { field, isInvalid, ids } = useFieldA11y<string>()
  const value = field.state.value ?? ""

  const shared = {
    id: ids.control,
    name: field.name,
    value,
    maxLength,
    disabled,
    required,
    onBlur: field.handleBlur,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      field.handleChange(e.target.value),
    "aria-invalid": isInvalid,
    "aria-describedby": describedBy(
      description && ids.description,
      isInvalid && ids.error
    ),
  }

  const withCounter = showCount && typeof maxLength === "number"

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
      {withCounter ? (
        <InputGroup>
          <InputGroupTextarea {...shared} {...textareaProps} />
          <InputGroupAddon align="block-end">
            <InputGroupText className="ms-auto tabular-nums">
              {value.length} / {maxLength}
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      ) : (
        <Textarea {...shared} {...textareaProps} />
      )}
    </FieldShell>
  )
}
