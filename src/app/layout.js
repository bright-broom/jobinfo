import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: '職務経歴書 | Toshiki Sakuta',
  description: 'セキュリティエンジニアとしての職務経歴と実績',
  keywords: 'セキュリティエンジニア, クラウドセキュリティ, Azure, Microsoft Defender',
  authors: [{ name: 'Toshiki Sakuta' }],
  openGraph: {
    title: '職務経歴書 | Toshiki Sakuta',
    description: 'セキュリティエンジニアとしての職務経歴と実績',
    type: 'profile',
    locale: 'ja_JP',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body 
        className={`${notoSansJP.className} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}