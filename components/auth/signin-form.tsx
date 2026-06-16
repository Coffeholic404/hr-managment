"use client"

import * as React from "react"
import { Eye, EyeOff, Loader2, LockKeyhole, User } from "lucide-react"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useSignInMutation } from "@/lib/store/services/authApi"

const signInSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "اسم المستخدم مطلوب")
    .min(3, "يجب أن يتكوّن اسم المستخدم من 3 أحرف على الأقل"),
  password: z
    .string()
    .min(1, "كلمة المرور مطلوبة")
    .min(6, "يجب أن تتكوّن كلمة المرور من 6 أحرف على الأقل"),
})

type SignInValues = z.infer<typeof signInSchema>
type FieldName = keyof SignInValues
type FieldErrors = Partial<Record<FieldName, string>>

const INITIAL_VALUES: SignInValues = { username: "", password: "" }

export function SignInForm({ className, ...props }: React.ComponentProps<"form">) {
  const [values, setValues] = React.useState<SignInValues>(INITIAL_VALUES)
  const [errors, setErrors] = React.useState<FieldErrors>({})
  const [showPassword, setShowPassword] = React.useState(false)

  const [signIn, { isLoading, isSuccess }] = useSignInMutation()

  const setField = (name: FieldName) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear a field's error as soon as the user edits it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = signInSchema.safeParse(values)
    if (!result.success) {
      const nextErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName
        if (!nextErrors[key]) {
          nextErrors[key] = issue.message
        }
      }
      setErrors(nextErrors)
      return
    }

    setErrors({})

    try {
      // No backend yet — the mutation mocks the call and console.logs values.
      await signIn(result.data).unwrap()
    } catch (error) {
      console.error("[SignInForm] sign in failed:", error)
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cn("w-full", className)}
      {...props}
    >
      <FieldGroup>
        <Field data-invalid={!!errors.username}>
          <FieldLabel htmlFor="username">اسم المستخدم</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <User aria-hidden />
            </InputGroupAddon>
            <InputGroupInput
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="ادخل اسم المستخدم"
              dir="ltr"
              className="text-end"
              value={values.username}
              onChange={(e) => setField("username")(e.target.value)}
              disabled={isLoading}
              aria-invalid={!!errors.username}
              aria-describedby={errors.username ? "username-error" : undefined}
            />
          </InputGroup>
          {errors.username && (
            <FieldError id="username-error">{errors.username}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!errors.password}>
          <FieldLabel htmlFor="password">كلمة المرور</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <LockKeyhole aria-hidden />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="ادخل كلمة المرور"
              dir="ltr"
              className="text-end"
              value={values.password}
              onChange={(e) => setField("password")(e.target.value)}
              disabled={isLoading}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                size="icon-xs"
                aria-label={
                  showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                }
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff aria-hidden /> : <Eye aria-hidden />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {errors.password && (
            <FieldError id="password-error">{errors.password}</FieldError>
          )}
        </Field>

        <Field>
          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin" aria-hidden />}
            {isLoading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
          {isSuccess && (
            <FieldDescription className="text-primary">
              تم تسجيل الدخول بنجاح (تجريبي) — راجع الـ console للقيم.
            </FieldDescription>
          )}
        </Field>
      </FieldGroup>
    </form>
  )
}
