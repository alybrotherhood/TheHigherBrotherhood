/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#171714",
        secondaryColor: "#f8d378",
      },
      fontFamily: {
        montserrat: ["Montserrat"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')  
  ],
});
