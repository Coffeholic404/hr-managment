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

const navItems = [
  { title: "Directory", icon: Users, isActive: true },
  { title: "Assets", icon: Boxes, isActive: false },
  { title: "Documents", icon: CloudUpload, isActive: false },
  { title: "Settings", icon: Settings, isActive: false },
]

const secondaryItems = [
  { title: "Support", icon: CircleHelp },
  { title: "Logout", icon: LogOut },
]

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
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
        <SidebarGroup className="px-4">
          <SidebarMenu className="gap-2">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={item.isActive}
                  className="h-auto rounded-sm px-4 py-3 text-label-md tracking-(--vh-tracking-label) text-on-surface-variant data-active:border-e-4 data-active:border-primary data-active:bg-surface-low data-active:font-bold data-active:text-primary"
                >
                  <item.icon className="size-5!" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-0 p-0">
        <div className="bg-surface-low p-4">
          <Button className="h-auto w-full gap-2 rounded-lg bg-primary py-3 text-label-md tracking-(--vh-tracking-label) text-on-primary shadow-[0px_4px_20px_rgba(46,139,87,0.1)] hover:bg-primary-container">
            <Plus className="size-5" />
            New Employee
          </Button>
        </div>
        <div className="px-4 py-6">
          <SidebarMenu className="gap-2">
            {secondaryItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="h-auto rounded-sm px-4 py-2 text-label-md tracking-(--vh-tracking-label) text-on-surface-variant">
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
