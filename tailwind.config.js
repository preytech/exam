/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "reg": ["reg"],
        "bold": ["bold"]
      }
    },

  },
  plugins: [],
}

