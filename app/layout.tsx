import '@/styles/sass/globals.scss'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  type: 'website',
  title: 'Memorial Sempre Fiel - Honre seus ancestrais na Arena do Corinthians',
  description:
    'Um espaço único na Arena do Corinthians para guardar histórias, cinzas e memórias de quem você ama. Eternize sua homenagem com relicários personalizados e tecnologia QRCode.',
  images: [
    {
      url: '/img/memorial-sempre-fiel.webp',
      width: 1200,
      height: 630,
      alt: 'Memorial Sempre Fiel - Honre seus ancestrais'
    }
  ],
  url: '/memorial-sempre-fiel',
  siteName: 'Memorial Sempre Fiel',
  twitter: {
    card: 'summary_large_image',
    title:
      'Memorial Sempre Fiel - Honre seus ancestrais na Arena do Corinthians',
    description:
      'Um espaço único na Arena do Corinthians para guardar histórias, cinzas e memórias de quem você ama. Eternize sua homenagem com relicários personalizados e tecnologia QRCode.',
    images: ['/img/memorial-sempre-fiel.webp']
  },

  alternates: {
    canonical: 'https://www.exemplo.com/'
  },

  icons: {
    icon: '/favicon.ico'
  }
}

// Twitter Card

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={raleway.className}>{children}</body>
      <GoogleAnalytics gaId="G-Z7S7LVX2P2" />
    </html>
  )
}
