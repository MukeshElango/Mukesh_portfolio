/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08090D",
        background: "#08090D",
        surface: "#11131A",
        "surface-dark": "#171A23",
        ember: "#FF4058",
        "ember-soft": "#FF7180",
        bone: "#F7F9FF",
        mist: "#E0E6F0",
        signal: "#4B9EFF",
        mint: "#D9E3F2",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        hero: ["'Barlow Condensed'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(230, 36, 41, 0.16)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "drift-slow": "drift 22s ease-in-out infinite",
        "drift-slower": "drift 32s ease-in-out infinite reverse",
        "spin-slow": "spin 14s linear infinite",
        "pulse-slow": "pulse 12s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
