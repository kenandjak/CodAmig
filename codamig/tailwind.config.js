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
      },
      colors: {
        "purple-soft": "#C6A4EB",
        "pink-imposing": "#D3058E",
        "pink-soft": "#FF56C7",
        "dark-app-black": "#0A0115",
      },
    },
  },
  plugins: [],
};
