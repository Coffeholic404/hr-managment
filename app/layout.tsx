import { Almarai } from "next/font/google"
import { DirectionProvider } from "@/components/ui/direction"
import { TooltipProvider } from "@/components/ui/tooltip"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TanStackDevtools } from "@tanstack/react-devtools"

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
        <DirectionProvider dir="rtl" direction="rtl">
        <ThemeProvider>
          <TooltipProvider>
          {children}
          <TanStackDevtools />
          </TooltipProvider>
          </ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  )
}
