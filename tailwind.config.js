/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",  // Ensure Tailwind scans the correct files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Override default Tailwind font
      },
    },
  },
  plugins: [],
};

  