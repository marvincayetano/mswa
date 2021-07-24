module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
            'cold': "url('/img/cold.svg')",
            'hot': "url('/img/hot.svg')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
