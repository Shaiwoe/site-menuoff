/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      colors : {
        'yellow-1000' : '#FFCD00',
        'white-2' : '#FFFAE6',
      }
    },
  },
  plugins: [
    require('flowbite')
  ],
}
