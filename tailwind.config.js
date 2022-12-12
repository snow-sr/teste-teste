/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    // create a color #6b3d1f with 70% opacity
    colors: {
      'main': {
        'DEFAULT': 'rgba(224, 214, 208, 0.7)'
      },
      'secondary': {
        'DEFAULT': 'rgba(20, 65, 111, 0.9)'
      }
    }
  },
  plugins: [],
}
