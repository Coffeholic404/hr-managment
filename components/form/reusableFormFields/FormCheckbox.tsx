"use client"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { BaseFieldProps, describedBy, useFieldA11y } from "./field-base"

type FormCheckboxProps = BaseFieldProps

/** A single boolean checkbox with an inline label + description. */
export default function FormCheckbox({
  label,
  description,
  required,
  disabled,
  className,
}: FormCheckboxProps) {
  const { field, isInvalid, ids } = useFieldA11y<boolean>()

  return (
    <Field orientation="horizontal" data-invalid={isInvalid} className={className}>
      <Checkbox
        id={ids.control}
        name={field.name}
        checked={field.state.value ?? false}
        onCheckedChange={(checked) => field.handleChange(checked === true)}
        onBlur={field.handleBlur}
        disabled={disabled}
        required={required}
        aria-invalid={isInvalid}
        aria-describedby={describedBy(
          description && ids.description,
          isInvalid && ids.error
        )}
      />
      <FieldContent>
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
        {description && (
          <FieldDescription id={ids.description}>
            {description}
          </FieldDescription>
        )}
        {isInvalid && <FieldError id={ids.error} errors={field.state.meta.errors} />}
      </FieldContent>
    </Field>
  )
}
