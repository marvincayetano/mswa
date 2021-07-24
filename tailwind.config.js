module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
            'cold': "url('/src/img/cold.svg')",
            'hot': "url('/src/img/hot.svg')",
           })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
