import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'red-engineer':'#f22150',
      'olivine':'#9fe96e',
      'lavender':'#a3a8f6'
    },
  },
  plugins: [],
}

