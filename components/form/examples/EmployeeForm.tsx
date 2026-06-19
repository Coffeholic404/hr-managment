"use client"

import * as React from "react"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup, FieldSeparator } from "@/components/ui/field"
import { useAppForm } from "../hooks"
import type { Option } from "../reusableFormFields"

const departments: Option[] = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Product", value: "product" },
  { label: "People & Culture", value: "people" },
  { label: "Finance", value: "finance" },
]

const countries: Option[] = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "Jordan", value: "jo" },
  { label: "United Arab Emirates", value: "ae" },
  { label: "Japan", value: "jp" },
]

const skills: Option[] = [
  { label: "TypeScript", value: "typescript" },
  { label: "React", value: "react" },
  { label: "Node.js", value: "node" },
  { label: "Design Systems", value: "design-systems" },
]

const employmentTypes: Option[] = [
  { label: "Full-time", value: "full_time" },
  { label: "Part-time", value: "part_time" },
  { label: "Contract", value: "contract" },
]

const MAX_AVATAR_SIZE = 2 * 1024 * 1024 // 2 MB

const employeeSchema = z.object({
  fullName: z.string().min(2, "Please enter the employee's full name."),
  email: z.email("Enter a valid email address."),
  bio: z.string().max(280, "Keep the bio under 280 characters.").optional(),
  department: z.string().min(1, "Select a department."),
  country: z.string().min(1, "Select a country."),
  employmentType: z.string().min(1, "Choose an employment type."),
  skills: z.array(z.string()).min(1, "Pick at least one skill."),
  startDate: z.iso.date("Select a start date."),
  avatar: z.array(z.instanceof(File)),
  agreeToPolicy: z
    .boolean()
    .refine((value) => value, "You must accept the company policy."),
})

type EmployeeFormValues = z.infer<typeof employeeSchema>

const defaultValues: EmployeeFormValues = {
  fullName: "",
  email: "",
  bio: "",
  department: "",
  country: "",
  employmentType: "full_time",
  skills: [],
  startDate: "",
  avatar: [],
  agreeToPolicy: false,
}

/**
 * End-to-end example wiring every reusable field into a single TanStack form
 * validated with Zod. Use it as a reference for the field APIs.
 */
export default function EmployeeForm() {
  const form = useAppForm({
    defaultValues,
    validators: { onSubmit: employeeSchema },
    onSubmit: async ({ value }) => {
      toast.success("Employee saved", {
        description: `${value.fullName} • ${value.department}`,
      })
    },
  })

  return (
    <Card dir="ltr" className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Add employee</CardTitle>
        <CardDescription>
          Create a new team member record. All fields validate on submit.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="employee-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.AppField name="fullName">
              {(field) => (
                <field.Input
                  label="Full name"
                  required
                  placeholder="Ada Lovelace"
                  autoComplete="name"
                />
              )}
            </form.AppField>

            <form.AppField name="email">
              {(field) => (
                <field.Input
                  label="Work email"
                  type="email"
                  required
                  placeholder="ada@company.com"
                  autoComplete="email"
                />
              )}
            </form.AppField>

            <form.AppField name="bio">
              {(field) => (
                <field.Textarea
                  label="Short bio"
                  description="A one-line introduction for the team directory."
                  maxLength={280}
                  showCount
                  rows={3}
                  placeholder="Tell us about this person…"
                />
              )}
            </form.AppField>

            <FieldSeparator />

            <form.AppField name="department">
              {(field) => (
                <field.Select
                  label="Department"
                  required
                  options={departments}
                  placeholder="Select a department"
                />
              )}
            </form.AppField>

            <form.AppField name="country">
              {(field) => (
                <field.Combobox
                  label="Country"
                  required
                  options={countries}
                  placeholder="Search countries…"
                  description="Determines the default working calendar."
                />
              )}
            </form.AppField>

            <form.AppField name="employmentType">
              {(field) => (
                <field.RadioGroup
                  label="Employment type"
                  required
                  options={employmentTypes}
                />
              )}
            </form.AppField>

            <form.AppField name="skills">
              {(field) => (
                <field.CheckboxGroup
                  label="Core skills"
                  required
                  options={skills}
                />
              )}
            </form.AppField>

            <form.AppField name="startDate">
              {(field) => (
                <field.DatePicker
                  label="Start date"
                  required
                  minDate={new Date()}
                />
              )}
            </form.AppField>

            <form.AppField name="avatar">
              {(field) => (
                <field.FileUpload
                  label="Profile photo"
                  description="PNG or JPG, up to 2 MB."
                  accept="image/png,image/jpeg"
                  maxSize={MAX_AVATAR_SIZE}
                  // multiple={true}
                />
              )}
            </form.AppField>

            <FieldSeparator />

            <form.AppField name="agreeToPolicy">
              {(field) => (
                <field.Checkbox
                  label="I confirm this information is accurate"
                  description="Required to create the employee record."
                  required
                />
              )}
            </form.AppField>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="gap-2">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <Button type="submit" form="employee-form" disabled={isSubmitting}>
              {isSubmitting ? "Saving…" : "Save employee"}
            </Button>
          )}
        </form.Subscribe>
      </CardFooter>
    </Card>
  )
}
