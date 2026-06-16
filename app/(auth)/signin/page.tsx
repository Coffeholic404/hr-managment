import type { Metadata } from "next"

import { SignInForm } from "@/components/auth/signin-form"

export const metadata: Metadata = {
  title: "تسجيل الدخول",
  description: "سجّل الدخول إلى نظام إدارة الموارد البشرية",
}

export default function SignInPage() {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <header className="flex flex-col gap-1.5 text-center">
          <h1 className="text-2xl font-bold text-foreground">تسجيل الدخول</h1>
          <p className="text-sm text-muted-foreground">
            أدخل بياناتك للوصول إلى لوحة التحكم
          </p>
        </header>

        <SignInForm />
      </div>
    </div>
  )
}
