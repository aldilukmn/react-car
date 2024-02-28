/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#0D28A6",
        secondary: "#5CB85F",
        third: '#E0E7FF'
      }
    },
  },
  plugins: [],
}

