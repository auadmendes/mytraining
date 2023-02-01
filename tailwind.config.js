/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        flag_blue: {
          200: '#87ceeb',
          500: '#64b4f0'
        },
        flag_pink: {
          200: '#ffc0cb',
          500: '#ffaec8'
        },
        gray: {
          100: '#F2F2F2',
          200: '#E1E1E6',
          300: '#8D8D99',
          600: '#555555',
          700: '#333333',
          800: '#202024',
          900: '#0D0D0D'
        }
      }
    }
  }
}
