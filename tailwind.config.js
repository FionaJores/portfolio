/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(71, 41, 21)',
        'secondary':'rgb(71, 98, 43)'
      },
      colors: {
        primary: 'rgb(71, 41, 21)',
        secondary: 'rgb(71, 98, 43)',
      },
    },
    fontFamily: {
      'hero-font':'Vollkorn'
    }
  },
  plugins: [],
}

