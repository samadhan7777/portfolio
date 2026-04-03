import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samadhan | Full Stack Developer',
  description: 'Professional Full Stack Developer specializing in React, Next.js, and modern web technologies',
  keywords: 'Full Stack Developer, React, Next.js, Tailwind CSS, Web Developer',
  authors: [{ name: 'Samadhan' }],
  icons: {
    icon: '/images/brand/s_logo1.png',
    shortcut: '/images/brand/s_logo1.png',
    apple: '/images/brand/s_logo1.png',
  },
  openGraph: {
    title: 'Samadhan | Full Stack Developer',
    description: 'Professional Full Stack Developer creating amazing web experiences',
    type: 'website',
  },
  // Add this section here:
  verification: {
    google: 'google6c7a57c8d5d82687',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-[#0b1220] text-slate-100">{children}</body>
    </html>
  )
}