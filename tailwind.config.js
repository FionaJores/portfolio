/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(176,82,22)',
        'secondary':'rgb(23,57,29)'
      },
      colors: {
        primary: 'rgb(176,82,22)',
        secondary: 'rgb(23,57,29)',
      },
    },
    fontFamily: {
      'hero-font':'Vollkorn'
    }
  },
  plugins: [],
}

