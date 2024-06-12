/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.html',
    './src/**/*.{html,js}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', 
        '11xl': '12rem', 
        '12xl': '13rem',
        '13xl': '16rem',
      },
      padding:{
        '10':'2.5rem',
        '11':'3rem',
        '12':'3.5rem',
        '13':'4rem',
      },
      width:{
        '81':'22rem',
        '82':'24rem',
        '83':'26rem',
      },
      height:{
        '98':'26rem',
        '99':'28rem',
        '100':'30rem',
      },
      fontFamily: {
        'red-hat-display': ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        lightBlue: '#9ED2E6',
        darkBlue: '#6294A5',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

