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
      },
      boxShadow: {
        soft: '0 24px 48px -24px rgba(14, 36, 27, 0.28)',
        card: '0 2px 24px -8px rgba(14, 36, 27, 0.14)',
        lift: '0 16px 40px -16px rgba(14, 36, 27, 0.22)',
      },
    },
  },
  plugins: [],
}
