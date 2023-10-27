/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        "primary": "#FF3811",
        "dark-1": "#151515",
        "dark-2": "#444444",
        "dark-3": "#737373",
        "dark-7": "#F3F3F3",
      }
    },
  },
  plugins: [],
}