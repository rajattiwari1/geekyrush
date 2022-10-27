module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EC4067',
        'dark': '#222222'
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {
      display: ["group-hover"],
    },
  },
  darkMode: 'class',
  plugins: [],
}