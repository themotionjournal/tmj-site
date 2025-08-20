import type { AppProps } from 'next/app'
import '../styles/globals.css'
import SmoothScroll from '../components/SmoothScroll'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SmoothScroll />
      <Component {...pageProps} />
    </>
  )
}
