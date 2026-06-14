import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#F6F1E7",
        "paper-dark": "#ECE2CC",
        ink: "#26261F",
        forest: "#2F4538",
        "forest-light": "#41604F",
        rust: "#BC5B39",
        sage: "#8AA28A",
      },
      fontFamily: {
        display: ["var(--font-mono)", "monospace"],
        body: ["var(--font-serif)", "serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(47,69,56,0.25)" },
          "50%": { boxShadow: "0 0 24px 6px rgba(47,69,56,0.45)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
