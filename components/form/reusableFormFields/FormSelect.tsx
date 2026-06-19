"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BaseFieldProps,
  describedBy,
  FieldShell,
  Option,
  useFieldA11y,
} from "./field-base"

interface FormSelectProps extends BaseFieldProps {
  options: Option[]
  /** Shown inside the dropdown when `options` is empty. */
  emptyMessage?: string
}

/** Single-select dropdown backed by a list of options. */
export default function FormSelect({
  label,
  description,
  placeholder = "Select…",
  required,
  disabled,
  className,
  options,
  emptyMessage = "No options available",
}: FormSelectProps) {
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
      <Select
        name={field.name}
        value={field.state.value || undefined}
        onValueChange={field.handleChange}
        disabled={disabled}
      >
        <SelectTrigger
          id={ids.control}
          className="w-full"
          aria-invalid={isInvalid}
          aria-describedby={describedBy(
            description && ids.description,
            isInvalid && ids.error
          )}
          onBlur={field.handleBlur}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          {options.length === 0 ? (
            <div className="px-2 py-1.5 text-sm text-muted-foreground">
              {emptyMessage}
            </div>
          ) : (
            options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </FieldShell>
  )
}
