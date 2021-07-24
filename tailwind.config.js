module.exports = {
  purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
        './helpers/**/*.{js,ts,jsx,tsx}',
        // Add more here
  ],
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
