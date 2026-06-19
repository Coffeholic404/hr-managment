"use client"

import { Checkbox } from "@/components/ui/checkbox"
import {
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  BaseFieldProps,
  Option,
  useFieldA11y,
} from "./field-base"

interface FormCheckboxGroupProps extends BaseFieldProps {
  options: Option[]
}

/** Multi-select group whose value is an array of the selected option values. */
export default function FormCheckboxGroup({
  label,
  description,
  required,
  disabled,
  className,
  options,
}: FormCheckboxGroupProps) {
  const { field, isInvalid, ids } = useFieldA11y<string[]>()
  const selected = field.state.value ?? []

  const toggle = (value: string, checked: boolean) => {
    const next = checked
      ? [...selected, value]
      : selected.filter((v) => v !== value)
    field.handleChange(next)
  }

  return (
    <FieldSet
      data-invalid={isInvalid}
      className={className}
      aria-describedby={isInvalid ? ids.error : undefined}
    >
      {label && (
        <FieldLegend variant="label">
          {label}
          {required && (
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          )}
        </FieldLegend>
      )}
      {description && (
        <FieldDescription id={ids.description}>{description}</FieldDescription>
      )}
      <div className="grid gap-2.5">
        {options.map((option) => {
          const optionId = `${field.name}-${option.value}`
          return (
            <FieldLabel
              key={option.value}
              htmlFor={optionId}
              className="flex flex-row items-center gap-2 font-normal"
            >
              <Checkbox
                id={optionId}
                checked={selected.includes(option.value)}
                onCheckedChange={(checked) =>
                  toggle(option.value, checked === true)
                }
                onBlur={field.handleBlur}
                disabled={disabled || option.disabled}
                aria-invalid={isInvalid}
              />
              {option.label}
            </FieldLabel>
          )
        })}
      </div>
      {isInvalid && <FieldError id={ids.error} errors={field.state.meta.errors} />}
    </FieldSet>
  )
}
