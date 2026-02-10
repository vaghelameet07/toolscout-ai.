/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { 'pulse-slow': 'pulse 3s infinite' },
    },
  },
  plugins: [],
}
