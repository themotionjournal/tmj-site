import { useState } from "react";
import { Play, Camera, Sparkles, Newspaper, Mail, ArrowRight, Instagram, Youtube, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center shadow-lg">
              <span className="text-black font-black tracking-tight">TMJ</span>
            </div>
            <span className="hidden sm:block font-semibold tracking-wide text-zinc-200">The Motion Journal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#manifesto" className="hover:text-white">Manifesto</a>
            <a href="#features" className="hover:text-white">Focus</a>
            <a href="#articles" className="hover:text-white">Articoli</a>
            <a href="#about" className="hover:text-white">Chi siamo</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#subscribe" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-4 py-2 text-sm hover:bg-white hover:text-black transition">Subscribe</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_50%)]" />
          <div className="absolute -inset-x-40 -top-40 h-80 bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight"
          >
            Born in silence, <span className="text-zinc-300">forged on set</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300"
          >
            We turn the tools of cinema into stories that matter. A magazine for operators, DOPs and gear-heads who live where speed, precision and beauty collide.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#articles" className="group inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3 text-sm font-semibold shadow hover:shadow-xl transition">
              Leggi gli articoli <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#reel" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 text-sm hover:bg-white hover:text-black transition">
              Showreel <Play className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2"><Camera className="h-4 w-4"/>U‑Crane, Scorpio, Technocrane</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4"/>Virtual Production</span>
            <span className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4"/>Deep gear reviews</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Manifesto</h2>
            <p className="mt-6 text-zinc-300 leading-relaxed">
              Siamo nati nel silenzio, dietro le quinte. Forgiati sul set, tra velocità e disciplina. Esistiamo per rivelare ciò che si muove invisibile. Ogni azione conta. Ogni scelta lascia un segno. TMJ è un atto di resistenza contro l’ovvio.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Special Action", desc: "U‑Crane, Scorpio Arm, pursuit e teste stabilizzate spiegate da chi le usa." },
              { title: "Virtual Production", desc: "LED volumes, Unreal & Disguise: workflow, limiti, verità utili." },
              { title: "Toolcraft", desc: "Recensioni senza sponsor: tecnica, test, schede operative." },
              { title: "Field Notes", desc: "Diari di set, logbook, errori veri e come evitarli." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-zinc-800/80 p-5 hover:bg-zinc-900/40 transition">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section id="articles" className="border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ultimi Articoli</h2>
            <a href="#" className="text-sm text-zinc-400 hover:text-white">Vedi tutti</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "Review", title: "Mini Scorpio V: verità da set", img: "/placeholder/1.jpg" },
              { tag: "How‑to", title: "Black Arm: settaggi anti‑jello", img: "/placeholder/2.jpg" },
              { tag: "Report", title: "U‑Crane Dynamic in autostrada: logbook", img: "/placeholder/3.jpg" },
              { tag: "VP", title: "LED volume: quando NON usarlo", img: "/placeholder/4.jpg" },
              { tag: "Tools", title: "Isolatori: dalle molle all'idraulica", img: "/placeholder/5.jpg" },
              { tag: "Ops", title: "Pursuit car: checklist per non morire", img: "/placeholder/6.jpg" },
            ].map((a, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl border border-zinc-800">
                <div className="aspect-[16/10] bg-zinc-900" />
                <div className="p-5">
                  <span className="inline-flex items-center rounded-full border border-zinc-700 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-300">{a.tag}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:underline">{a.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400 line-clamp-2">Teoria, pratica e scheda operativa pronta da stampare.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REEL */}
      <section id="reel" className="border-t border-zinc-900 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-zinc-800 aspect-video bg-zinc-900 flex items-center justify-center text-zinc-400">Embed Showreel</div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Cinematography in Motion</h2>
            <p className="mt-4 text-zinc-300">Un rullo selettivo: special action, high‑end rigging, VP. Niente fluff, solo sostanza e craft.</p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3"><ArrowRight className="h-5 w-5 mt-0.5"/>Riprese veicolari, crane, pursuit</li>
              <li className="flex items-start gap-3"><ArrowRight className="h-5 w-5 mt-0.5"/>Workflow VP reale: da storyboard a plate</li>
              <li className="flex items-start gap-3"><ArrowRight className="h-5 w-5 mt-0.5"/>Schede operative PDF per il set</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section id="subscribe" className="border-t border-zinc-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ricevi i nuovi numeri</h2>
          <p className="mt-3 text-zinc-300">Una mail quando pubblichiamo qualcosa di utile. Zero spam, mai.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert(`Iscrizione inviata: ${email}`); setEmail(""); }}
            className="mt-6 mx-auto max-w-md flex items-center gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@esempio.com"
              className="flex-1 rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-zinc-500"
            />
            <button type="submit" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold">Iscrivimi</button>
          </form>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12">
          <div className="prose prose-invert prose-zinc max-w-none">
            <h2>Chi c'è dietro</h2>
            <p>
              The Motion Journal è curato da operatori e tecnici di set con anni di esperienza su U‑Crane, Scorpio e VP. Niente marketing: solo esperienza reale, test e appunti di lavoro.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">Contenuti ricorrenti</h3>
            <ul className="mt-4 space-y-2 text-zinc-300 text-sm">
              <li className="flex items-center gap-2"><BookOpen className="h-4 w-4"/>Schede operative stampabili</li>
              <li className="flex items-center gap-2"><Camera className="h-4 w-4"/>Case study di set</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4"/>Workflow VP realistici</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} The Motion Journal. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-300">
            <a className="hover:text-white inline-flex items-center gap-1" href="#"><Instagram className="h-4 w-4"/>Instagram</a>
            <a className="hover:text-white inline-flex items-center gap-1" href="#"><Youtube className="h-4 w-4"/>YouTube</a>
            <a className="hover:text-white inline-flex items-center gap-1" href="mailto:hello@themotionjournal.com"><Mail className="h-4 w-4"/>hello@themotionjournal.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
