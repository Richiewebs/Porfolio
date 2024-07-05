/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #4B9CD2 24.05%, #4525BF 100%)',
    },
    colors:{
      'tabcol': ' #C5CFF5',
      'white': '#fff',
      'btn2': '#0F152E',
      'exbg':  '#D7EDFB'

    },
    fontFamily: {
      'sans': ['Poppins', 'system-ui']
    },
    extend: {
      width: {
        '565': '565px',
      }
    },
  },
  plugins: [],
}
