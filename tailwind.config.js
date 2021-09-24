module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '3': '0 0 33%'
    },
    extend: {
      lineHeight: {
        'title': '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}