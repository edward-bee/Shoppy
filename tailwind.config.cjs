/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
    plugins: []
  }
}
