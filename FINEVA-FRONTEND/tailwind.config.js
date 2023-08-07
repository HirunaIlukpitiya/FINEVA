/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors:{
        'mblue':'#0B162B',
        'ylv':'#FDDD0D',
        'wt':'#FAF9F9',
      },
      fontFamily:{
        'playfair': ['Playfair Display']
      },
    },
  },
  plugins: [
    require('daisyui'),
    //require('@tailwindcss/aspect-ratio'),
  ],
}

