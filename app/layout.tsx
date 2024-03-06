import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@/styles/sass/globals.scss'
import { Footer } from '@/components/molecules'
import { Header, Modal } from '@/components/organisms'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diamond Films'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Modal />
        <Footer />
      </body>
      <GoogleTagManager
        gtmId="GTM-ND454GP5"
        dataLayerName={`${metadata.title}`}
      />
      <GoogleAnalytics gaId="G-DRBHT7HM35" />
    </html>
  )
}
