import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/components/Layout'
import { SubscribeBanner } from '@/components/SubscribeBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jessie | 软件设计师 · 全栈开发者 · 业余摄影师',
  description:
    'Jessie 的个人博客与作品集。分享软件设计、全栈开发、摄影与人生思考。',
  keywords: ['Jessie', 'Next.js', 'React', 'Tailwind', '摄影', '博客', '全栈'],
  authors: [{ name: 'Jessie' }],
  openGraph: {
    title: 'Jessie | 软件设计师 · 全栈开发者 · 业余摄影师',
    description: 'Jessie 的个人博客与作品集。',
    url: 'https://你的域名',
    siteName: 'Jessie Blog',
    images: ['/og-image.jpg'],
    locale: 'zh_HK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-HK' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className='min-h-screen bg-zinc-100 text-zinc-950 dark:bg-black dark:text-zinc-50'>
          <div className='mx-auto min-h-screen w-full max-w-7xl bg-white shadow-2xl shadow-zinc-950/10 ring-1 ring-zinc-950/10 dark:bg-zinc-950 dark:ring-white/10'>
            <Header />
            <main>{children}</main>
            <div className='bg-zinc-50 px-4 pb-10 dark:bg-zinc-950 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-6xl'>
                <SubscribeBanner />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
