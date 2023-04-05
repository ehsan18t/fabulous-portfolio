/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '576px',
        // => @media (min-width: 576px) { ... }

        xmd: '960px',
        // => @media (min-width: 960px) { ... }

        xlg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
