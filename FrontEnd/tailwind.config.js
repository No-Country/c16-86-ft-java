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
      'lavender':'#a3a8f6',
      'gris-nuevo':'#3A3D44',
      'azul-argentina':'#22AAFF',
      'dark-cyan':'#52BAB6',
      'dark-spring-green':'#4AA072',
      'caribean-current':'#0B7B7D',
      'color-navegador':'#596C8B'
    },
  },
  plugins: [],
}

