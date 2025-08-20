import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Motion Journal</title>
        <meta
          name="description"
          content="Motion, craft, stories. Reviews, how-to e report dal set: camera movement, grip e workflow."
        />
        <meta property="og:title" content="The Motion Journal" />
        <meta
          property="og:description"
          content="Motion, craft, stories. Reviews, how-to e report dal set."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Cambia tema con body[data-theme] se vuoi (deepblue | onyx) */}
      <main className="relative min-h-screen" suppressHydrationWarning>
        <div className="grid-overlay absolute inset-0" />

        {/* NAV */}
        <header className="sticky top-0 z-20 backdrop-blur bg-[rgba(12,12,12,.6)] border-b border-[var(--border)]">
          <nav className="container max-w-6xl h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="TMJ" width={26} height={26} priority />
              <span className="text-xs tracking-widest opacity-80">
                THE MOTION JOURNAL
              </span>
            </div>
            <div className="flex items-center gap-5 text-sm">
              <a className="opacity-80 hover:opacity-100" href="#manifesto">
                Manifesto
              </a>
              <a className="opacity-80 hover:opacity-100" href="#topics">
                Topics
              </a>
              <a className="opacity-80 hover:opacity-100" href="#highlights">
                Highlights
              </a>
              <a className="opacity-80 hover:opacity-100" href="#join">
                Join
              </a>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <section className="container max-w-6xl px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h1 className="display text-4xl md:text-6xl leading-tight">
                Motion, Craft, Stories.
              </h1>
              <p className="mt-4 text-[var(--muted)] max-w-xl">
                Il taccuino operativo su camera movement, grip, attrezzatura e
                workflow. Recensioni oneste, how-to pratici, report dal set.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#join" className="btn-primary">
                  Iscriviti agli update
                </a>
                <a
                  href="https://instagram.com/tmj_the_motion_journal"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-md border border-[var(--border)] text-sm hover:border-[var(--accent)]"
                >
                  Instagram
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="badge">gear</span>
                <span className="badge">workflow</span>
                <span className="badge">field notes</span>
              </div>
            </div>

            <div className="w-full md:w-[360px]">
              <div className="card p-6 shadow-glow">
                <div className="border border-[var(--accent)] rounded-lg p-4">
                  <Image
                    src="/logo.svg"
                    alt="TMJ Logo"
                    width={64}
                    height={64}
                    className="opacity-90"
                  />
                  <h3 className="mt-4 font-bold">Payoff</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    The Motion Journal — strumenti, procedure e test per far
                    risparmiare tempo e rogne sul set.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MANIFESTO */}
        <section id="manifesto" className="container max-w-6xl px-4 py-10">
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold">Manifesto</h2>
            <div className="mt-3 space-y-2 text-[var(--muted)] leading-relaxed">
              <p>1. Onestà tecnica: dati e prove, non brochure.</p>
              <p>2. Sicurezza prima: grip, pesi, setup e bilanciamento corretti.</p>
              <p>3. Tempo è re: procedure replicabili, checklist e scorciatoie pulite.</p>
              <p>4. Zero fuffa: se una cosa non serve, non la portiamo sul set.</p>
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section id="topics" className="container max-w-6xl px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Reviews",
                desc: "Test reali di slider, head, remote, dolly e accessori.",
                tag: "gear",
              },
              {
                title: "How-To",
                desc: "Setup, bilanciamento, trucchi di messa in opera e sicurezza.",
                tag: "workflow",
              },
              {
                title: "Reports",
                desc: "Case study dal set: cosa ha funzionato, cosa no e perché.",
                tag: "field",
              },
            ].map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="card p-5"
              >
                <span className="badge">{c.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{c.desc}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm underline decoration-[var(--accent)] underline-offset-4 hover:opacity-90"
                >
                  Entra nella sezione →
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="container max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="card p-5">
                <span className="text-xs opacity-70">In arrivo</span>
                <h4 className="mt-1 font-semibold">Titolo articolo #{n}</h4>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Abstract dell’articolo: 3-4 righe di anteprima.
                </p>
                <div className="mt-3 h-28 rounded-md bg-[var(--accent-2)]/35 border border-[var(--accent)]/40" />
              </div>
            ))}
          </div>
        </section>

        {/* JOIN */}
        <section id="join" className="container max-w-6xl px-4 py-16">
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold">Resta aggiornato</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Metti la mail: invieremo un recap con articoli nuovi e strumenti
              utili.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full sm:w-80 px-3 py-2 rounded-md bg-black border border-[var(--border)] text-sm outline-none focus:border-[var(--accent)]"
              />
              <button className="btn-primary">Iscriviti</button>
            </form>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Oppure scrivi a{" "}
              <a className="underline" href="mailto:hello@themotionjournal.com">
                hello@themotionjournal.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--border)]">
          <div className="container max-w-6xl h-14 flex items-center justify-between text-xs text-[var(--muted)]">
            <span>© {new Date().getFullYear()} The Motion Journal</span>
            <div className="flex items-center gap-4">
              <a
                className="hover:text-[var(--fg)]"
                href="https://instagram.com/tmj_the_motion_journal"
                target="_blank"
                rel="noreferrer"
              >
                @tmj_the_motion_journal
              </a>
              <ThemeToggle />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

/* Mini toggle tema (client-side) */
function ThemeToggle() {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => document.body.removeAttribute("data-theme")}
        className="h-6 w-6 rounded-full border border-[var(--border)] bg-[var(--accent)]"
        title="Field"
      />
      <button
        onClick={() => document.body.setAttribute("data-theme", "deepblue")}
        className="h-6 w-6 rounded-full border border-[var(--border)] bg-[#1f3e72]"
        title="Deep Blue"
      />
      <button
        onClick={() => document.body.setAttribute("data-theme", "onyx")}
        className="h-6 w-6 rounded-full border border-[var(--border)] bg-[#2b2b2b]"
        title="Onyx"
      />
    </div>
  );
}
