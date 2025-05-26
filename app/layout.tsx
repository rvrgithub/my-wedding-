import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Radhika & Vishal's Wedding",
  description: "Join us for our special day",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
