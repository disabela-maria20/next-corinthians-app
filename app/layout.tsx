import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@/styles/sass/globals.scss'
import { Footer } from '@/components/molecules'
import { Header } from '@/components/organisms'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
