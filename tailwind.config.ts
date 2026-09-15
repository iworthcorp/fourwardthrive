import type { Config } from "tailwindcss";

// Reads each color from a CSS custom property (set in globals.css) so every
// token can swap between its light and dark value via the `.dark` class,
// while still supporting Tailwind's opacity modifiers (e.g. `text-sage-deep/70`).
// Cast to `string` because Tailwind's own config types predate this (documented) function-value pattern.
function withOpacity(variable: string): string {
  const resolver = ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue !== undefined ? `rgb(var(${variable}) / ${opacityValue})` : `rgb(var(${variable}))`;
  return resolver as unknown as string;
}

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Design 1 — Sage
        fraunces: ["Fraunces", "serif"],
        inter: ["Inter", "sans-serif"],
        // Design 2 — Powder Blue
        ibm: ["IBM Plex Sans", "sans-serif"],
        source: ["Source Serif 4", "serif"],
        // Design 3 — Meadow
        cormorant: ["Cormorant Garamond", "serif"],
        jost: ["Jost", "sans-serif"],
        // Design 4 — Lavender
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        // Design 5 — Peach
        dmserif: ["DM Serif Display", "serif"],
        karla: ["Karla", "sans-serif"],
        // Design 6 — Coach
        playfair: ["Playfair Display", "serif"],
        manrope: ["Manrope", "sans-serif"],
        // Design 7 — Noir
        sora: ["Sora", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        // Design 8 — Ink
        lora: ["Lora", "serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        sage: {
          bg: withOpacity("--sage-bg"),
          card: withOpacity("--sage-card"),
          primary: withOpacity("--sage-primary"),
          deep: withOpacity("--sage-deep"),
          line: withOpacity("--sage-line"),
        },
        powder: {
          bg: withOpacity("--powder-bg"),
          card: withOpacity("--powder-card"),
          primary: withOpacity("--powder-primary"),
          deep: withOpacity("--powder-deep"),
          line: withOpacity("--powder-line"),
        },
        meadow: {
          bg: withOpacity("--meadow-bg"),
          card: withOpacity("--meadow-card"),
          primary: withOpacity("--meadow-primary"),
          deep: withOpacity("--meadow-deep"),
          line: withOpacity("--meadow-line"),
        },
        lavender: {
          bg: withOpacity("--lavender-bg"),
          card: withOpacity("--lavender-card"),
          primary: withOpacity("--lavender-primary"),
          deep: withOpacity("--lavender-deep"),
          line: withOpacity("--lavender-line"),
        },
        peach: {
          bg: withOpacity("--peach-bg"),
          card: withOpacity("--peach-card"),
          primary: withOpacity("--peach-primary"),
          deep: withOpacity("--peach-deep"),
          line: withOpacity("--peach-line"),
        },
        // Shared accent for the Appointment CTA across every design
        appt: {
          DEFAULT: withOpacity("--appt"),
          hover: withOpacity("--appt-hover"),
          light: withOpacity("--appt-light"),
        },
        coach: {
          bg: withOpacity("--coach-bg"),
          card: withOpacity("--coach-card"),
          primary: withOpacity("--coach-primary"),
          deep: withOpacity("--coach-deep"),
          line: withOpacity("--coach-line"),
          accent: withOpacity("--coach-accent"),
        },
        noir: {
          bg: withOpacity("--noir-bg"),
          card: withOpacity("--noir-card"),
          primary: withOpacity("--noir-primary"),
          deep: withOpacity("--noir-deep"),
          line: withOpacity("--noir-line"),
        },
        ink: {
          bg: withOpacity("--ink-bg"),
          card: withOpacity("--ink-card"),
          primary: withOpacity("--ink-primary"),
          deep: withOpacity("--ink-deep"),
          line: withOpacity("--ink-line"),
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
