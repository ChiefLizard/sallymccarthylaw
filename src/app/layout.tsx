import './globals.css'
import type { Metadata } from 'next'
import { Frank_Ruhl_Libre } from 'next/font/google'
import Footer from '@/components/footer'

const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={frankRuhlLibre.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}