/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa",
        card: "#ffffff",
      },
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}
