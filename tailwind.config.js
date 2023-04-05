/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      black: '#0B0D17',
      periwinkleBlue: '#D0D6F9',
      white: '#FFFF',
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif']
    },
    fontSize: {
      sm: ['14px'],
      base: ['16px', '28px'],
      lg: ['32px', '56px'],
      xl: ['100px', '150px']
    }
  },
  plugins: []
}
