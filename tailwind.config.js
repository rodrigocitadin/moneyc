/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#212529',
      'gray-200': '#DEE2E6',
      'gray-400': '#ADB5BD',
      'gray-500': '#6C757D',
      'gray-800': '#343A40',
      'red-300': '#D30000',
      'red-500': '#980000',
      'green-300': '#32A632',
      'green-500': '#118C11'
    }
  },
  plugins: [],
}

