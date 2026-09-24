/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#050505",
          soft: "#0D0D0D",
        },
        offwhite: "#F5F5F5",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C766",
          dark: "#8C6A20",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6C766 0%, #D4AF37 50%, #8C6A20 100%)",
      },
    },
  },
  plugins: [],
};
