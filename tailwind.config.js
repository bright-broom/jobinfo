/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-light) / 0.1)',
          100: 'rgb(var(--primary-light) / 0.2)',
          200: 'rgb(var(--primary-light) / 0.3)',
          300: 'rgb(var(--primary-light) / 0.4)',
          400: 'rgb(var(--primary-light) / 0.6)',
          500: 'rgb(var(--primary) / 1)',
          600: 'rgb(var(--primary-dark) / 1)',
          700: 'rgb(var(--primary-dark) / 0.8)',
          800: 'rgb(var(--primary-dark) / 0.9)',
          900: 'rgb(var(--primary-dark) / 1)',
        },
      },
      fontFamily: {
        sans: [
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans JP',
          'メイリオ',
          'sans-serif',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '98': '24.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addBase, theme }) => {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.semibold') },
        'h3': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.medium') },
      })
    },
  ],
}