/** @type {import('tailwindcss').Config} */
exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          exo: ['Exo', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  