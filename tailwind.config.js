/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.5em',
      },
      colors: {
        'gray-gray': '#D9D9D9',
      },
    },
  },
  plugins: [],
};
