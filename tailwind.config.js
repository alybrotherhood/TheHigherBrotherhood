/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
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
  plugins: [],
}

