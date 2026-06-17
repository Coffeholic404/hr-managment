"use client"

import { Bell, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
  // import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"

// const navLinks = [
//   { title: "Directory", isActive: true },
//   { title: "Assets", isActive: false },
//   { title: "Uploads", isActive: false },
// ]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-card px-4 md:px-10">
      <div className="flex items-center gap-8">
        <SidebarTrigger />
        {/* <h2 className="font-heading text-title-lg font-bold text-primary">
          HR Dashboard
        </h2>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href="#"
              className={
                link.isActive
                  ? "border-b-2 border-primary pb-1 text-label-md tracking-(--vh-tracking-label) text-primary"
                  : "text-label-md tracking-(--vh-tracking-label) text-on-surface-variant transition-colors hover:text-primary"
              }
            >
              {link.title}
            </a>
          ))}
        </nav> */}
      </div>

      <div className="flex items-center gap-4">
        {/* <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-outline" />
          <Input
            type="text"
            placeholder="Search directory..."
            className="h-9 w-64 rounded-full border-outline-variant bg-surface-container ps-9 text-body-md"
          />
        </div> */}

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-on-surface-variant hover:bg-surface-container"
          >
            <Bell className="size-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-on-surface-variant hover:bg-surface-container"
          >
            <Settings className="size-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>

        <div className="size-8 overflow-hidden rounded-full border border-outline-variant">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User Avatar"
            className="size-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS578glbVTHRT1yfrtLiMlWn8pwq4-8Gb5KmMUtKnzBbT0QnADfVNOcHKh4LfWuCngI3s1oRWFXakmUHQ3qaPyUNeutF3XqJPxMO91BPvrfNiOVWujQmWhxD_UTq4pe4pNI7TwEY9fPaMlWbTb9UGQGNj14MX9_6uu5Cj9y3c_ksdz4HkwN4aH2XuFPKixLgn4x1p0z1-5DbRM0WUrs-9HkpuohYDniKf-9ehWch38ESStpER_tcieT9hFKIFZgxsmXeD3ABm7mmo"
          />
        </div>
      </div>
    </header>
  )
}
