"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  BaseFieldProps,
  describedBy,
  FieldShell,
  useFieldA11y,
} from "./field-base"

interface FormDatePickerProps extends BaseFieldProps {
  /** BCP-47 locale for the displayed date + calendar labels. */
  locale?: string
  /** Disable days before this date. */
  minDate?: Date
  /** Disable days after this date. */
  maxDate?: Date
}

/** `yyyy-MM-dd`, built from local date parts so there's no timezone drift. */
function toISODate(date: Date) {
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const day = `${date.getDate()}`.padStart(2, "0")
  return `${date.getFullYear()}-${month}-${day}`
}

function parseISODate(value?: string) {
  if (!value) return undefined
  const [year, month, day] = value.split("-").map(Number)
  if (!year || !month || !day) return undefined
  return new Date(year, month - 1, day)
}

/**
 * Date picker built on a popover + dependency-free calendar. Stores the value
 * as an ISO `yyyy-MM-dd` string, which pairs cleanly with `z.iso.date()`.
 */
export default function FormDatePicker({
  label,
  description,
  placeholder = "Pick a date",
  required,
  disabled,
  className,
  locale,
  minDate,
  maxDate,
}: FormDatePickerProps) {
  const { field, isInvalid, ids } = useFieldA11y<string>()
  const [open, setOpen] = React.useState(false)

  const selected = parseISODate(field.state.value)
  const formatted = selected
    ? new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(selected)
    : null

  const isDisabledDay = (date: Date) =>
    (minDate ? date < new Date(toISODate(minDate)) : false) ||
    (maxDate ? date > new Date(toISODate(maxDate)) : false)

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
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) field.handleBlur()
        }}
      >
        <PopoverTrigger asChild>
          <Button
            type="button"
            id={ids.control}
            variant="outline"
            disabled={disabled}
            aria-invalid={isInvalid}
            aria-describedby={describedBy(
              description && ids.description,
              isInvalid && ids.error
            )}
            className={cn(
              "w-full justify-start gap-2 font-normal",
              !selected && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="text-muted-foreground" />
            {formatted ?? placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            value={selected}
            locale={locale}
            disabled={isDisabledDay}
            onChange={(date) => {
              field.handleChange(toISODate(date))
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </FieldShell>
  )
}
