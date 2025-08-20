/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}" // se in futuro userai la cartella /pages fuori da /src
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        glow:
          "0 0 0 1px var(--accent), 0 8px 40px -8px color-mix(in srgb, var(--accent) 35%, #000 65%)",
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      display: ["Unbounded", "Inter", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
