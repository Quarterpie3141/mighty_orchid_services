import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MTOS | Mighty Orchid Disability Support Services',
  description: 'Empowering individuals with disabilities through quality NDIS support. Our services include SIL, respite, community access, daily life support, high-intensity care, and employment aids. Committed to excellence, we help clients thrive in communities around Karratha, fostering independence and connection. Contact us to discover how we can assist you or your loved ones today. "People Looking After People" - Together, creating brighter futures."',
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
