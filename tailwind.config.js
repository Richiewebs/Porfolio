/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #4B9CD2 24.05%, #4525BF 100%)',
      'backg-gradient': 'linear-gradient(180deg, #FFFFFF 47.67%, #C1E3FA 80%)'

    },
    colors:{
      'tabcol': ' #C5CFF5',
      'white': '#fff',
      'btn2': '#0F152E',
      'exbg':  '#D7EDFB',
      'licol':  '#4641C3',
      'piccol':  'rgba(13, 55, 229, 0.5)',
      'bocol':  '#37ACFA',
      'slate': '#f1f5f9',
      'footercol': 'rgba(24, 19, 74, 1)'




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
