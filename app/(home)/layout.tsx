import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AK Stackclimber',
  description: 'Max\'s (mis)adventures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
