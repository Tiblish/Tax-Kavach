import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "border-subtle": "var(--border-subtle)",
        "border-default": "var(--border-default)",
        // ── New Warm Palette (inspired by ABP Live & professional finance) ──
        brand: {
          // Primary Crimson — authoritative, warm, soothing
          crimson: "#C0392B",          // Deep warm red — primary accent
          "crimson-dark": "#96281B",   // Hover/Active darker shade
          "crimson-light": "#FADBD8", // Tinted background

          // Navy — trust, stability (secondary)
          navy: "#1B2A4A",            // Dark navy for headings & depth
          "navy-dark": "#0F1D35",     // Footer, deep surfaces
          "navy-light": "#2C3E5A",    // Lighter variant

          // Legacy aliases (kept for backward-compatibility)
          blue: "#1B2A4A",
          "blue-dark": "#0F1D35",
          grey: "#5A6577",
          light: "#FAF8F5",           // Warm cream base
          steel: "#8896A7",
          accent: "#E67E22",          // Warm amber accent for micro-highlights
        },
        // Warm neutral scale
        warm: {
          50: "#FDFCFA",
          100: "#FAF8F5",
          200: "#F0ECE6",
          300: "#E2DDD5",
          400: "#C5BEB4",
          500: "#9C9488",
          600: "#6B6359",
          700: "#4A4339",
          800: "#2D2721",
          900: "#1A1613",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
      fontSize: {
        // WCAG-friendly scale: 16px base, 1.25 ratio
        "body": ["1rem", { lineHeight: "1.6", letterSpacing: "-0.01em" }],       // 16px
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "-0.01em" }], // 18px
        "heading-sm": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }], // 24px
        "heading": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],   // 36px
        "heading-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],   // 48px
        "display": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],     // 64px
      },
      spacing: {
        // 8px grid system
        "18": "4.5rem",  // 72px
        "22": "5.5rem",  // 88px
        "26": "6.5rem",  // 104px
        "30": "7.5rem",  // 120px
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "elevation-1": "0 1px 3px rgba(26,22,19,0.04), 0 4px 12px rgba(26,22,19,0.06)",
        "elevation-2": "0 4px 6px rgba(26,22,19,0.04), 0 12px 40px rgba(26,22,19,0.08)",
        "elevation-3": "0 8px 24px rgba(26,22,19,0.08), 0 24px 48px rgba(26,22,19,0.06)",
        "elevation-hero": "0 32px 64px -16px rgba(26,22,19,0.15)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.1)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
