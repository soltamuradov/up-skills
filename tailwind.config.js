/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-1': '#433D60',
        'black-2': 'rgba(14, 14, 14, 0.32)',
        'black-3': '#343045',
        'gray-1': 'rgba(192, 183, 232, 0.33)',
        'gray-2': '#8176af',
        'gray-3': '#C0B7E8',
      },
      borderRadius: {
        '40': '40px',
      }
    }
  },
  plugins: [],
}