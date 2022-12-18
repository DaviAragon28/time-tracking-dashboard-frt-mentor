/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        blueDesign: '#5847eb',
        work: '#ff8c66',
        play: '#56c2e6',
        study: '#ff5c7c',
        exercise: '#4acf81',
        social: '#7536d3',
        selfcare: '#f1c65b',
        VeryDarkBlue: '#0f1424',
        DarkBlue: '#1c1f4a',
        DesaturatedBlue: '#6f76c8',
        PaleBlue: '#bdc1ff'
      },
      fontFamily: {
        'sans': ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
