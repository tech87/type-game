/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
        'primary': '#8360c3',
        'secondary': '#d8e1ff',
        'blue': '#69ddff',
        'main-color': 'rgba(221, 221, 221)',
        'black': '#000'
     },
     fontFamily: {
        body: ['Nunito']
     },
    extend: {
      boxShadow: {
        '3xl': '0 10px 10px 10px rgba(0, 0, 0, 0.2)',
        '2xl': '0 5px 5px 5px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}

