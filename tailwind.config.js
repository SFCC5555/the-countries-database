/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkModeElements: 'hsl(209, 23%, 22%)',
        darkModeBackground: 'hsl(207, 26%, 17%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeBackground: 'hsl(0, 0%, 98%)',
        darkModeText: 'hsl(0, 0%, 100%)',
        lightModeElements: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

