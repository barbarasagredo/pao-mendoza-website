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
        'text-strong': '#282828',
        'back-gray': '#fafafa',
      },
      letterSpacing: {
        tightest: '-.075em',
      },
    },
  },
  plugins: [],
};
