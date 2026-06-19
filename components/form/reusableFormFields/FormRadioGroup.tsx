"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { BaseFieldProps, Option, useFieldA11y } from "./field-base"

interface FormRadioGroupProps extends BaseFieldProps {
  options: Option[]
}

/** Single-choice radio group whose value is the selected option value. */
export default function FormRadioGroup({
  label,
  description,
  required,
  disabled,
  className,
  options,
}: FormRadioGroupProps) {
  const { field, isInvalid, ids } = useFieldA11y<string>()

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
      <RadioGroup
        value={field.state.value || ""}
        onValueChange={field.handleChange}
        disabled={disabled}
        aria-invalid={isInvalid}
      >
        {options.map((option) => {
          const optionId = `${field.name}-${option.value}`
          return (
            <FieldLabel
              key={option.value}
              htmlFor={optionId}
              className="flex flex-row items-center gap-2 font-normal"
            >
              <RadioGroupItem
                id={optionId}
                value={option.value}
                disabled={option.disabled}
                onBlur={field.handleBlur}
                aria-invalid={isInvalid}
              />
              {option.label}
            </FieldLabel>
          )
        })}
      </RadioGroup>
      {isInvalid && <FieldError id={ids.error} errors={field.state.meta.errors} />}
    </FieldSet>
  )
}
