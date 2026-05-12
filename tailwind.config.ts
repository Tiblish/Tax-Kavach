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
        brand: {
          blue: "#003366",       // Deep Royal Blue — primary (WCAG AAA on white)
          "blue-dark": "#002244", // Hover/Active state
          grey: "#475569",       // Steel Grey — body text
          light: "#F8FAFC",      // Off-white base (anti-fatigue)
          steel: "#94A3B8",      // Muted accent / labels
          accent: "#0EA5E9",     // Sky blue for micro-highlights
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
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
        "elevation-1": "0 1px 3px rgba(0,51,102,0.04), 0 4px 12px rgba(0,51,102,0.06)",
        "elevation-2": "0 4px 6px rgba(0,51,102,0.04), 0 12px 40px rgba(0,51,102,0.08)",
        "elevation-3": "0 8px 24px rgba(0,51,102,0.08), 0 24px 48px rgba(0,51,102,0.06)",
        "elevation-hero": "0 32px 64px -16px rgba(0,51,102,0.15)",
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
