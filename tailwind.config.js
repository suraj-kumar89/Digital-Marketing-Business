/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sharedComponent/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        ui: ["var(--font-jakarta)"],
        body: ["var(--font-jakarta)"],
        heading: ["var(--font-jakarta)"],
      },
    },
  },

  plugins: [],
}
