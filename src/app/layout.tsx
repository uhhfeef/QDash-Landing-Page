import './globals.css'
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'QDash - Privacy-First AI Dashboard',
  description: 'A privacy-first, AI-powered dashboard for data visualization and analysis',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${outfit.variable} min-h-screen bg-background antialiased`}>
        {children}
      </body>
    </html>
  )
}
