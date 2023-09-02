import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AK Stackclimber Admin Page',
  description: 'Admin Page for AK Stackclimber Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <h1>akstackclimber admin portal</h1>
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
