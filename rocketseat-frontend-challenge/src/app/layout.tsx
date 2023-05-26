import Header from '@/components/Header'
import './globals.css'
import { Saira, Saira_Condensed as SairaCondensed } from 'next/font/google'
import React from 'react'

const saira = Saira({ subsets: ['latin'], variable: '--font-saira' })
const sairaCondensed = SairaCondensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-saira-condensed',
})

export const metadata = {
  title: 'capputeeno',
  description: 'Technical challenge for Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} ${sairaCondensed.variable} min-h-screen`}
      >
        <main className="flex">
          <Header />
        </main>
        {children}
      </body>
    </html>
  )
}
