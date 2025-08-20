import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>The Motion Journal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Motion Journal — reports, breakdowns and craft of moving images." />
      </Head>

      {/* Background “Igloo-vibe”: nero profondo + sfumature verde/blu */}
      <div className="relative min-h-screen text-zinc-100 overflow-x-hidden">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 40% at 80% 10%, rgba(8,40,22,.35) 0%, transparent 60%),' +
              'radial-gradient(50% 35% at 20% 0%, rgba(7,22,52,.35) 0%, transparent 55%),' +
              'linear-gradient(180deg, #0A0A0A 0%, #0B0B0B 100%)'
          }}
        />

        {/* NAV */}
        <header className="flex items-center justify-between px-6 md:px-10 py-5">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="TMJ" className="h-7 w-auto" />
            <span className="text-sm tracking-widest uppercase text-zinc-400">The Motion Journal</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/reports" className="hover:text-white transition-colors">Reports</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </header>

        {/* HERO */}
        <main className="px-6 md:px-10">
          <section className="relative mx-auto max-w-6xl pt-16 md:pt-24">
            <motion.h1
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              The Motion Journal
            </motion.h1>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-2xl text-zinc-300"
              style={{ transitionDelay: '120ms' }}
            >
              Un hub editoriale sull’immagine in movimento: breakdown, making-of,
              strumenti e visioni creative per cineasti, operatori e curiosi del
              linguaggio visivo.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              style={{ transitionDelay: '220ms' }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/reports"
                className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Leggi i report
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-3 text-sm hover:border-zinc-500 hover:text-white transition-colors"
              >
                Manifesto
              </Link>
            </motion.div>

            {/* “Smash/Manifesto” */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.25, duration: 0.8, ease: [0.22,1,0.36,1] } }}
              className="mt-16 md:mt-24 rounded-2xl border border-zinc-800 bg-black/30 backdrop-blur-sm p-6 md:p-9"
            >
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Manifesto</h2>
              <p className="mt-3 leading-relaxed text-zinc-300">
                Crediamo nella <span className="text-zinc-100">cura del movimento</span>, nel
                <span className="text-zinc-100"> rigore artigianale</span> e nella
                <span className="text-emerald-300/90"> libertà di sperimentare</span>. Raccogliamo
                processi, errori, soluzioni e casi studio per elevare la qualità delle
                immagini in ogni contesto: cinema, set, branded content.
              </p>
            </motion.div>

            {/* Social animati */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.6 } }}
              className="mt-12 flex items-center gap-5"
            >
              {[
                { href: 'https://instagram.com/', icon: Instagram, label: 'Instagram' },
                { href: 'https://youtube.com/', icon: Youtube, label: 'YouTube' },
                { href: 'https://www.linkedin.com/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:hello@themotionjournal.com', icon: Mail, label: 'Email' }
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-900/40 backdrop-blur-sm hover:-translate-y-0.5 hover:border-zinc-500 transition-all"
                >
                  <Icon className="h-5 w-5 text-zinc-300 group-hover:text-white transition-colors" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="mx-auto max-w-6xl py-20 md:py-24 text-sm text-zinc-400">
            <div className="border-t border-zinc-800/80 pt-8 flex items-center justify-between">
              <span>© {new Date().getFullYear()} The Motion Journal</span>
              <span className="text-zinc-500">Craft · Motion · Camera</span>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
