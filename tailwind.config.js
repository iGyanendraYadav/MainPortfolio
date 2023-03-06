/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 5s infinite linear"
      },

      keyframes: {
        blob: {
          "0%": {
            transform: " rotate(0deg) "
          },
          "100%": {
            transform: " rotate(360deg) "
          },
        }
      },
      fontFamily: {
        Rampart: ["Poppins", "sans-serif"],
       },
    },
  },
  plugins: [],
  darkMode: 'class',
}