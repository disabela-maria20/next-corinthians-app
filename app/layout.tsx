import '@/styles/sass/globals.scss'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Raleway } from 'next/font/google'
import Script from 'next/script'

const raleway = Raleway({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  type: 'website',
  title:
    'Memorial Eternamente Fiel - Honre seus ancestrais na Arena do Corinthians',
  description:
    'Um espaço único na Arena do Corinthians para guardar histórias, cinzas e memórias de quem você ama. Eternize sua homenagem com relicários personalizados e tecnologia QRCode.',
  images: [
    {
      url: '/img/memorial-sempre-fiel.webp',
      width: 1200,
      height: 630,
      alt: 'Memorial Eternamente Fiel - Honre seus ancestrais'
    }
  ],
  url: '/memorial-sempre-fiel',
  siteName: 'Memorial Sempre Fiel',
  twitter: {
    card: 'summary_large_image',
    title:
      'Memorial Eternamente Fiel - Honre seus ancestrais na Arena do Corinthians',
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
      <Script id="livechat-script" strategy="afterInteractive">
        {`
          window._lc = window._lc || {};
          window.__lc.license = 11079287;
          window.__lc.integration_name = "manual_channels";
          window.__lc.product_name = "livechat";
          ;(function(n,t,c){function i(n){return e.h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n._lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
        `}
      </Script>
    </html>
  )
}
