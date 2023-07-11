/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    fontFamily:{
      sans:['Inter, sans-serif']
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

