module.exports = {
  purge: [],
  theme: {
    extend: {
      colors:{
        'primary': '#f3c614',
        'secondary': '#353535'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
