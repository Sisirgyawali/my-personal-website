import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: [],
};

export default config;
