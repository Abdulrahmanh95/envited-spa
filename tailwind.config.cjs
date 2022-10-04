/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'purple-dark': '#240D57',
      'purple-light': '#501FC1',
      'purple-envited': '#8456EC',
      'pink-envited': '#E87BF8',
      'purple-1': '#CCB6FF',
      'purple-2': '#EDE5FF',
      'purple-3': '#F6F2FF',
      'red-bg': '#FFD7E0',
      'red-fg': '#E61445',
      'green-bg': '#D3FFE2',
      'green-fg': '#00805E',
      'neutral-1': '#4F4F4F',
      'neutral-2': '#828282',
      'neutral-3': '#BDBDBD',
      'neutral-4': '#E0E0E0',
      'neutral-5': '#F2F2F2',
      'neutral-6': '#FBFAFF',
    },
    extend: {
      keyframes: {
        'moving-gradient': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      animation: {
        'moving-gradient': 'moving-gradient 3s ease infinite'
      }
    },
  },
  plugins: [],
}
