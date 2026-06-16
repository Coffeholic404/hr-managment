"use client"

import * as React from "react"
import {
  Boxes,
  CircleHelp,
  CloudUpload,
  LogOut,
  Plus,
  Settings,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { title: "Directory", icon: Users, link: '/' },
  { title: "Assets", icon: Boxes, link: '/assets' },
  { title: "Documents", icon: CloudUpload, link: '/documents' },
  { title: "Settings", icon: Settings, link: '/settings' },
]

function isLinkActive(pathname: string, link: string) {
  // Root link is only active on an exact match; other links match the
  // section, so nested routes (e.g. /assets/123) keep the parent active.
  return link === "/" ? pathname === "/" : pathname.startsWith(link)
}

const secondaryItems = [
  { title: "Support", icon: CircleHelp },
  { title: "Logout", icon: LogOut },
]

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar side="right" className="border-outline-variant" {...props}>
      <SidebarHeader className="gap-0 p-6">
        <h1 className="font-heading text-headline-md leading-(--vh-lh-headline-md) font-bold text-primary">
          Green Beach HR
        </h1>
        <p className="text-label-md tracking-(--vh-tracking-label) text-on-surface-variant/70">
          Enterprise Admin
        </p>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-4 ">
          <SidebarMenu className="gap-2 ">
            {navItems.map((item) => {
              const isActive = isLinkActive(pathname, item.link)

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="h-auto rounded-sm px-4 py-3 text-label-md tracking-(--vh-tracking-label) text-on-surface-variant data-active:border-e-4 data-active:border-primary data-active:bg-surface-low data-active:font-bold data-active:text-primary outline-4 outline-red-500"
                  >
                    <Link href={item.link} aria-current={isActive ? "page" : undefined}>
                      <item.icon className="size-5!" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-0 p-0">
        <div className="bg-surface-low p-4">
          <Button className="h-auto w-full gap-2 rounded-lg bg-primary py-3 text-label-md tracking-(--vh-tracking-label) text-on-primary shadow-[0px_4px_20px_rgba(46,139,87,0.1)] hover:bg-primary-container ">
            <Plus className="size-5" />
            New Employee
          </Button>
        </div>
        <div className="px-4 py-6">
          <SidebarMenu className="gap-2">
            {secondaryItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="h-auto  rounded-sm px-4 py-2 text-label-md tracking-(--vh-tracking-label) text-on-surface-variant">
                  <item.icon className="size-5!" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
