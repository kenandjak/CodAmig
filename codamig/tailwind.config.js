/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        ms: "570px", // ms = mobile size
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        kdam: ['"Kdam Thmor Pro"', "sans-serif"],
        jua: ["Jua", "sans-serif"],
      },
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(to right, #000000 60%, #210043 80%, #410087 100%)",
        "gradient-purple-dark":
          "linear-gradient(to bottom, #180032 0%, #0A0115 100%)",
      },
      colors: {
        "purple-soft": "#C6A4EB",
        "purple-light": "#3B067B",
        "purple-heavy": "#310163",
        "pink-imposing": "#D3058E",
        "pink-soft": "#FF56C7",
        "dark-app-black": "#0A0115",
      },
    },
  },
  plugins: [],
};
