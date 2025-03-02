/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainnavy: "#171523",
        mainmint: "#04D9D9",
        secondmint: "#04D9C4",
      },
    },
    fontFamily: {
      Cafe24Shiningstar: ["Cafe24Shiningstar"],
    },
  },
  plugins: [],
};
