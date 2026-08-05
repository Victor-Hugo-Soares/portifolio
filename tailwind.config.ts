import type { Config } from "tailwindcss";

/**
 * Design system — DOSSIÊ EDITORIAL
 * Direção aprovada em 05/08/2026: papel, serif, terracota, respiro.
 * Coerente com a identidade dos carrosséis do LinkedIn.
 * Não reintroduzir: dark mode neon, gradiente violeta/ciano, glow, grade de logos de stack.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        papel: {
          DEFAULT: "#F5F1E8",
          fundo: "#EFEADE",
          claro: "#FBF9F4",
        },
        tinta: {
          DEFAULT: "#1A1816",
          suave: "#3A3632",
        },
        grafite: "#5C5650",
        acento: {
          DEFAULT: "#A83E2A",
          claro: "#C25A44",
          fundo: "#F3E6E1",
        },
        linha: {
          DEFAULT: "#D8D0C0",
          forte: "#BDB3A0",
        },
      },
      fontFamily: {
        display: ["Zodiak", "Georgia", "Cambria", "serif"],
        sans: ["Switzer", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["Consolas", "Monaco", "monospace"],
      },
      letterSpacing: {
        kicker: "0.22em",
      },
      maxWidth: {
        leitura: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
