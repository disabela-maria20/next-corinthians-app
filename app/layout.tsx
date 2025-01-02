import '@/styles/sass/globals.scss'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
