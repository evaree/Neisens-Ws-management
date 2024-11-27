/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        "primary-color": "#160433",
        "green-color": "#0cf637",
      }
    },
  },
  plugins: [],
}