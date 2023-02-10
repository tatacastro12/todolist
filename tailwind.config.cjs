/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        'bench': ['BenchNine', 'sans-serif'],
       'graduate': ['Graduate', 'cursive'],},}
  },
  plugins: [],
}
