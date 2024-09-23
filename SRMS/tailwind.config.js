/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2C387E',
        'light-blue' : '#E6ECFF'
      },
    },
  },
  plugins: [],
}

