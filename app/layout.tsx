import { Almarai } from "next/font/google"
import { DirectionProvider } from "@/components/ui/direction"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StoreProvider } from "@/lib/store/StoreProvider"
import { TanStackDevtools } from "@tanstack/react-devtools"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-almarai',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${almarai.variable}`}
    >
      <body>
        <StoreProvider>
          <DirectionProvider dir="rtl" direction="rtl">
            <ThemeProvider>
              <TooltipProvider>
                <SidebarProvider
                  style={
                    {
                      "--sidebar-width": "17.5rem",
                    } as React.CSSProperties
                  }
                >
                  <AppSidebar />
                  <SidebarInset>
                    <SiteHeader />

                    <div className="flex-1 p-6 md:p-10">{children}</div>
                    <Toaster />
                  </SidebarInset>
                </SidebarProvider>
                <TanStackDevtools />
              </TooltipProvider>
            </ThemeProvider>
          </DirectionProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
