import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <SmoothScroll />
        <Component {...pageProps} />
      </div>
    </>
  )
}
