"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function isSameDay(a?: Date, b?: Date) {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export interface CalendarProps {
  /** Currently selected day. */
  value?: Date
  /** Called with the day the user picks. */
  onChange?: (date: Date) => void
  /** Return `true` to disable a given day. */
  disabled?: (date: Date) => boolean
  /** BCP-47 locale used for month / weekday labels (defaults to runtime locale). */
  locale?: string
  className?: string
}

/**
 * A lightweight, dependency-free month calendar.
 * Locale-aware (labels via `Intl`) and RTL-safe.
 */
function Calendar({ value, onChange, disabled, locale, className }: CalendarProps) {
  const [month, setMonth] = React.useState(() => startOfMonth(value ?? new Date()))

  React.useEffect(() => {
    if (value) setMonth(startOfMonth(value))
  }, [value])

  const today = new Date()
  const firstWeekday = month.getDay()
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate()

  const weekdayFmt = new Intl.DateTimeFormat(locale, { weekday: "short" })
  // 2023-01-01 is a Sunday — used only to derive localized weekday labels.
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    weekdayFmt.format(new Date(2023, 0, 1 + i))
  )
  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(month)

  const cells: Array<Date | null> = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from(
      { length: daysInMonth },
      (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)
    ),
  ]

  const goToMonth = (offset: number) =>
    setMonth(new Date(month.getFullYear(), month.getMonth() + offset, 1))

  return (
    <div
      role="group"
      aria-label={monthLabel}
      className={cn("w-fit select-none p-3", className)}
    >
      <div className="flex items-center justify-between pb-3">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-label="Previous month"
          onClick={() => goToMonth(-1)}
        >
          <ChevronLeftIcon className="rtl:rotate-180" />
        </Button>
        <div aria-live="polite" className="text-sm font-medium">
          {monthLabel}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-label="Next month"
          onClick={() => goToMonth(1)}
        >
          <ChevronRightIcon className="rtl:rotate-180" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekdays.map((label) => (
          <div
            key={label}
            aria-hidden="true"
            className="flex size-8 items-center justify-center text-xs font-normal text-muted-foreground"
          >
            {label}
          </div>
        ))}

        {cells.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} />

          const selected = isSameDay(day, value)
          const isToday = isSameDay(day, today)
          const isDisabled = disabled?.(day) ?? false

          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={isDisabled}
              aria-pressed={selected}
              aria-current={isToday ? "date" : undefined}
              onClick={() => onChange?.(day)}
              className={cn(
                "flex size-8 items-center justify-center rounded-md text-sm tabular-nums outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40",
                selected &&
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
                !selected && isToday && "ring-1 ring-border"
              )}
            >
              {day.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { Calendar }
