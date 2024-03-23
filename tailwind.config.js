/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: transparent,
      white: white,
      'gray-100': '#E1E1E6',
      'gray-300': '#C4C4CC',
      'gray-400': '#8D8D99',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#202024',
      'gray-900': '#121214',
      'red-300': '#F75A68',
      'red-500': '#AB222E',
      'red-700': '#7A1921',
      'blue-300': '#00B0B3',
      'blue-500': '#008587',
      'blue-700': '#015D5F'
    }
  },
  plugins: [],
}

