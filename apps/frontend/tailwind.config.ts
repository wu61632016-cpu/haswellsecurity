import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1440px" }
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#2340E8", dark: "#1A2FC2", soft: "#EEF3FF" },
        secondary: { DEFAULT: "#59C6F2", soft: "#EAF8FE" },
        dark: { DEFAULT: "#0B1530", soft: "#111D3D" },
        success: { DEFAULT: "#00C896", soft: "#E8FFF8" },
        muted: "#F5F7FA",
        border: "#E5E7EB"
      },
      boxShadow: {
        card: "0 8px 32px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
