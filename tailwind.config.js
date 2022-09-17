/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      md: '900px'
    },
    extend: {
      colors: {
        mainColor: '#FF0000'
      }
    },
  },
  plugins: [],
}