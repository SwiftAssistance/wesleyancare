/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.jsx',
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        evergreen: {
          DEFAULT: '#17362A',
          light: '#1F4737',
          dark: '#0E241B',
        },
        moss: {
          DEFAULT: '#4E7A62',
          light: '#8FB49D',
        },
        terracotta: {
          DEFAULT: '#C05F3C',
          dark: '#A84D2C',
          light: '#DE9070',
        },
        cream: '#FAF6EF',
        sand: '#F2EADC',
        parchment: '#FDFBF7',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
