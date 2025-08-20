import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import LogoMarquee from '@/components/LogoMarquee'

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false })

const fade = (d=0) => ({
  hidden:{opacity:0,y:22},
  show:{opacity:1,y:0,transition:{delay:d,duration:.8,ease:[0.22,1,0.36,1]}},
})

export default function Home() {
  return (
    <>
      <Head>
        <title>The Motion Journal</title>
        <meta name="description" content="Craft · Motion · Camera" />
      </Head>

      <div className="relative min-h-screen text-zinc-100">
        {/* background velato verde/blu */}
        <div
          className="fixed inset-0 -z-20"
          style={{
            background:
              'radial-gradient(60% 40% at 80% 10%, rgba(8,40,22,.30) 0%, transparent 60%),' +
              'radial-gradient(50% 35% at 20% 0%, rgba(7,22,52,.30) 0%, transparent 55%),' +
              'linear-gradient(180deg, #0A0A0A 0%, #0B0B0B 100%)',
          }}
        />

        {/* nav */}
        <header className="flex items-center justify-between px-6 md:px-10 py-5">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="TMJ" className="h-7 w-auto" />
            <span className="text-[12px] tracking-[0.2em] uppercase text-zinc-400">The Motion Journal</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/reports" className="hover:text-white">Reports</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </header>

        {/* HERO full */}
        <section className="px-6 md:px-10 pt-6">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                variants={fade()} initial="hidden" animate="show"
                className="text-[clamp(40px,7vw,88px)] font-[700] leading-[1.02] tracking-[-0.01em]"
              >
                The Motion Journal
              </motion.h1>

              <motion.p
                variants={fade(.12)} initial="hidden" animate="show"
                className="mt-4 max-w-xl text-zinc-300"
              >
                Hub editoriale sull’immagine in movimento. Breakdown, making-of, strumenti e visioni per cineasti e operatori.
              </motion.p>

              <motion.div
                variants={fade(.22)} initial="hidden" animate="show"
                className="mt-8 flex gap-4"
              >
                <Link href="/reports" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200">
                  Leggi i report
                </Link>
                <Link href="/about" className="rounded-full border border-zinc-700 px-5 py-3 text-sm hover:border-zinc-500">
                  Manifesto
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fade(.1)} initial="hidden" animate="show" className="rounded-2xl overflow-hidden">
              <Hero3D />
            </motion.div>
          </div>
        </section>

        <LogoMarquee />

        {/* manifesto card */}
        <section className="px-6 md:px-10">
          <motion.div
            variants={fade(.15)} initial="hidden" animate="show"
            className="mx-auto max-w-7xl rounded-2xl border border-zinc-800 bg-black/35 backdrop-blur-sm p-6 md:p-9"
          >
            <h2 className="text-2xl font-semibold tracking-tight">Manifesto</h2>
            <p className="mt-3 leading-relaxed text-zinc-300">
              Cura del movimento, rigore artigianale e libertà di sperimentare. Processi, errori,
              soluzioni e casi studio per elevare la qualità delle immagini.
            </p>
          </motion.div>

          <footer className="mx-auto max-w-7xl py-16 text-sm text-zinc-400">
            <div className="border-t border-zinc-800/80 pt-8 flex items-center justify-between">
              <span>© {new Date().getFullYear()} The Motion Journal</span>
              <span className="text-zinc-500">Craft · Motion · Camera</span>
            </div>
          </footer>
        </section>
      </div>
    </>
  )
}
