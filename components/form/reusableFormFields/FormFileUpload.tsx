"use client"

import * as React from "react"
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BaseFieldProps,
  describedBy,
  FieldShell,
  useFieldA11y,
} from "./field-base"

interface FormFileUploadProps extends BaseFieldProps {
  /** `accept` attribute, e.g. `"image/*,.pdf"`. */
  accept?: string
  /** Allow selecting more than one file. */
  multiple?: boolean
  /** Reject files larger than this many bytes (silently skipped). */
  maxSize?: number
}

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB"]
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  )
  const value = bytes / 1024 ** exponent
  return `${value.toFixed(value < 10 && exponent > 0 ? 1 : 0)} ${units[exponent]}`
}

/**
 * Drag-and-drop (or click) file input. The field value is always a `File[]`,
 * which validates nicely with `z.array(z.instanceof(File))`.
 */
export default function FormFileUpload({
  label,
  description,
  required,
  disabled,
  className,
  accept,
  multiple = false,
  maxSize,
}: FormFileUploadProps) {
  const { field, isInvalid, ids } = useFieldA11y<File[]>()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = React.useState(false)

  const files = field.state.value ?? []

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return
    const accepted = Array.from(incoming).filter(
      (file) => !maxSize || file.size <= maxSize
    )
    field.handleChange(multiple ? [...files, ...accepted] : accepted.slice(0, 1))
    field.handleBlur()
  }

  const removeAt = (index: number) => {
    field.handleChange(files.filter((_, i) => i !== index))
    field.handleBlur()
  }

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
      <div
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          if (!disabled) addFiles(e.dataTransfer.files)
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-input px-4 py-6 text-center transition-colors",
          dragging && "border-ring bg-accent/50",
          isInvalid && "border-destructive",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        <UploadCloudIcon className="size-5 text-muted-foreground" />
        <div className="text-sm">
          <button
            type="button"
            className="font-medium text-primary underline-offset-4 hover:underline"
            onClick={() => inputRef.current?.click()}
          >
            Click to upload
          </button>{" "}
          <span className="text-muted-foreground">or drag and drop</span>
        </div>
        {maxSize && (
          <p className="text-xs text-muted-foreground">
            Up to {formatBytes(maxSize)} {multiple ? "each" : ""}
          </p>
        )}
        <input
          ref={inputRef}
          id={ids.control}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          required={required && files.length === 0}
          className="sr-only"
          aria-invalid={isInvalid}
          aria-describedby={describedBy(
            description && ids.description,
            isInvalid && ids.error
          )}
          onChange={(e) => {
            addFiles(e.target.files)
            e.target.value = ""
          }}
        />
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-2 rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm"
            >
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <span className="truncate">{file.name}</span>
              <span className="ms-auto shrink-0 text-xs text-muted-foreground tabular-nums">
                {formatBytes(file.size)}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label={`Remove ${file.name}`}
                onClick={() => removeAt(index)}
                disabled={disabled}
              >
                <XIcon />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </FieldShell>
  )
}
