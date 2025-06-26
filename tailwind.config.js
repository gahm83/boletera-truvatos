/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#000000',
        secondary: '#454546',
        white: '#FFFFFF',
        neongreen: '#c3ff01',
        'neongreen-light': '#D1FF39',
      },
      fontFamily: {
        'hybe': ["HYBE", "sans-serif"],
        'sans': ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        'base': '20px',
        'sm': '18px',
        'lg': '22px',
        'xl': '26px',
        '2xl': '32px',
        '3xl': '38px',
        '4xl': '50px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}