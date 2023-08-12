{import('tailwindcss').Config}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'mblue':'#0B162B',
        'ylv':'#FDDD0D',
        'wt':'#FAF9F9',
      },
      fontFamily: {
        'london': [''],
      },
    },
  },
  plugins: [
    require("daisyui"),
    //require("@tailwindcss/aspect-ratio"),
    require('tailwindcss-animated'),
  ],
}

