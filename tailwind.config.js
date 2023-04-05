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
      sm: ['14px', '16.8px'],
      base: ['16px', '19.2px'],
      body: ['18px', '32px'],
      md: ['28px', '33.6px'],
      lg: ['32px', '36.67px'],
      xl: ['56px', '64.18px'],
      '2xl': ['100px', '114.6px'],
      '3xl': ['150px', '171.9px']
    }
  },
  plugins: []
}
