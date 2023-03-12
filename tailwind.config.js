/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/views/*ejs"],
  theme: {
    extend: {
      colors: {
        "main": "#1AA6B7",
        "secondary": "#F56A79"
      }
    },
  },
  plugins: [],
}