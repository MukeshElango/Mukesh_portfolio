/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08080d",
        background: "#08080d",
        surface: "#101018",
        "surface-dark": "#16161f",
        ember: "#e8232b",
        "ember-soft": "#ff4d55",
        bone: "#e9e9ef",
        mist: "#84849a",
      },
      fontFamily: {
        display: ["'Syne'", "Space Grotesk", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(232, 35, 43, 0.14)",
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

