import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const runtime = "edge"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XEL - Advanced AI Chatbot Solutions | Custom Development & Integration",
  description:
    "XEL specializes in AI chatbot development for businesses. Custom solutions, database integration, multi-platform deployment. 3+ years experience across healthcare, e-commerce, banking & more.",
  keywords:
    "AI chatbot development, custom chatbots, database integration, WhatsApp chatbot, healthcare chatbot, e-commerce chatbot",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
