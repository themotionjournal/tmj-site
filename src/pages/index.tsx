import Head from "next/head";
import { Space_Grotesk, Inter } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>The Motion Journal — Coming Soon</title>
        <meta name="description" content="The Motion Journal — Coming Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className={`${space.className} ${inter.className}`}
        style={{ minHeight: "100vh", background: "#0a0a0a" }}
      >
        {/* velature leggere per non avere nero piatto */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(40% 28% at 80% 12%, rgba(16,42,28,.25) 0%, transparent 60%)," +
              "radial-gradient(38% 26% at 20% 0%, rgba(12,26,56,.22) 0%, transparent 55%)",
          }}
        />

        <main
          style={{
            position: "relative",
            zIndex: 1,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            color: "#f5f5f5",
            textAlign: "center",
          }}
        >
          {/* Logo opzionale: /public/logo.svg */}
          <img
            src="/logo.svg"
            alt="The Motion Journal"
            style={{ width: 56, height: "auto", marginBottom: 18, opacity: 0.9 }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />

          <h1
            style={{
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
              fontSize: "clamp(28px, 5.2vw, 64px)",
            }}
          >
            The Motion Journal
          </h1>

          <p
            style={{
              marginTop: 12,
              color: "#c9c9c9",
              maxWidth: 680,
              fontSize: "clamp(14px, 2.2vw, 18px)",
            }}
          >
            COMING SOON
          </p>

          <p
            style={{
              marginTop: 16,
              color: "#9b9b9b",
              fontSize: 14,
            }}
          >
            Contatti:{" "}
            <a
              href="mailto:themotionjournal@gmail.com"
              style={{ color: "#e7e7e7", textDecoration: "underline" }}
            >
              themotionjournal@gmail.com
            </a>
          </p>
        </main>

        <footer
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9b9b9b",
            fontSize: 12,
          }}
        >
          © {new Date().getFullYear()} The Motion Journal
        </footer>
      </div>
    </>
  );
}
