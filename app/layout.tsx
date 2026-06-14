import { Almarai } from "next/font/google"
import { DirectionProvider } from "@/components/ui/direction"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
          {children}
          </ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  )
}
