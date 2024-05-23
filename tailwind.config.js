/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "var(--body-bg)",
        active: "#fff !important",
      },
      boxShadow: {
        cursor: "var(--cursor-shadow)",
      },
    },
    fontFamily: {
      body: ["Helvetica", "sans-serif"],
      Axiforma: ["Axiforma", "sans-serif"],
    },
  },
  plugins: [],
};
