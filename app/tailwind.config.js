module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#16697aff',
      secondary: '#82c0ccff',
      highlight: '#ffa62bff',
      accent: '#489fb5ff',
      white: '#ede7e3ff',
      lightgrey: '#eee',
      grey: '#a3a3a3',
      darkgrey: '#333',
      red: '#b03d30',
    },
    fontFamily: {
      base: ['Open Sans', 'sans-serif'],
      special: ['Luckiest Guy', 'cursive'],
      headlines: ['Josefin Slab', 'serif'],

    },
    stroke: {
      white: '#ede7e3ff',
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
