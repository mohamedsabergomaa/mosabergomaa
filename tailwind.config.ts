import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0A",
          secondary: "#131313",
          elevated: "#1A1A1A"
        },
        border: {
          subtle: "#262626",
          strong: "#3A3A3A"
        },
        text: {
          primary: "#FAFAFA",
          secondary: "#A3A3A3",
          muted: "#525252"
        },
        accent: {
          DEFAULT: "#D4FF4F",
          hover: "#C2EB3D",
          soft: "rgba(212,255,79,0.08)"
        },
        success: "#22C55E",
        warning: "#F59E0B"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(64px, 12vw, 160px)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(48px, 8vw, 96px)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(40px, 6vw, 72px)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(32px, 4vw, 48px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "eyebrow": ["12px", { lineHeight: "1", letterSpacing: "0.12em" }]
      },
      spacing: {
        "section": "clamp(96px, 12vw, 192px)",
        "section-sm": "clamp(64px, 8vw, 128px)"
      },
      maxWidth: {
        container: "1440px"
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)"
      },
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "600ms",
        cinematic: "1200ms"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.8)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "grain": {
          "0%, 100%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(-2%,-1%)" },
          "40%": { transform: "translate(1%,2%)" },
          "60%": { transform: "translate(-1%,-2%)" },
          "80%": { transform: "translate(2%,1%)" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        grain: "grain 8s steps(5) infinite"
      }
    }
  },
  plugins: []
};

export default config;
