/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "40px 40px 100px rgba(6, 15, 20, 0.25);",
      },
      borderRadius: {
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
