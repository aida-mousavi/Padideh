// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        dropShadow: {
          'white-glow': '0 4px 5.2px rgba(255, 255, 255, 0.6)',
        },
      },
    },
    plugins: [],
  }
  