import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/ui/page-transition"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Limkokwing University - Empowering Creativity & Innovation",
  description: "World-class education in design, technology, and business",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <div className="flex min-h-screen flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              <Navigation />
            </Suspense>
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </Suspense>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
