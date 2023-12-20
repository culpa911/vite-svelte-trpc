/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans' : ['Helvetica']
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
})

