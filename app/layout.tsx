import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Providers
import { UIProvider } from '@/providers/ui-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Whistle',
  description: 'Anonymous whistleblowing platform on the blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UIProvider>
        <body className={inter.className}>{children}</body>
      </UIProvider>
    </html>
  )
}
