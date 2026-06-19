"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  BaseFieldProps,
  describedBy,
  FieldShell,
  Option,
  useFieldA11y,
} from "./field-base"

interface FormComboboxProps extends BaseFieldProps {
  options: Option[]
  /** Shown in the popup when there are no (matching) options. */
  emptyMessage?: string
  /** Render a loading row instead of the list (e.g. while async-fetching). */
  loading?: boolean
}

/**
 * Searchable single-select. The field stores the option's `value` string while
 * the combobox works with the full option object for display + filtering.
 */
export default function FormCombobox({
  label,
  description,
  placeholder = "Search…",
  required,
  disabled,
  className,
  options,
  emptyMessage = "No results found.",
  loading = false,
}: FormComboboxProps) {
  const { field, isInvalid, ids } = useFieldA11y<string>()
  const selected = options.find((o) => o.value === field.state.value) ?? null

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
      <Combobox
        items={options}
        value={selected}
        onValueChange={(option: Option | null) =>
          field.handleChange(option?.value ?? "")
        }
        itemToStringLabel={(option: Option) => option?.label ?? ""}
        disabled={disabled}
      >
        <ComboboxInput
          id={ids.control}
          placeholder={placeholder}
          showClear={!!selected}
          disabled={disabled}
          onBlur={field.handleBlur}
          aria-invalid={isInvalid}
          aria-describedby={describedBy(
            description && ids.description,
            isInvalid && ids.error
          )}
        />
        <ComboboxContent>
          {loading ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Loading…
            </div>
          ) : (
            <>
              <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
              <ComboboxList>
                {(option: Option) => (
                  <ComboboxItem
                    key={option.value}
                    value={option}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </>
          )}
        </ComboboxContent>
      </Combobox>
    </FieldShell>
  )
}
