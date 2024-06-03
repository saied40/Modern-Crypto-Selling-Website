/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "var(--body-bg)",
        "body-tr": "var(--body-bg-tr)",
        active: "#fff !important",
      },
      boxShadow: {
        cursor: "var(--cursor-shadow)",
      },
    },
    fontFamily: {
      body: ["Helvetica", "sans-serif"],
      axiforma: ["Axiforma", "sans-serif"],
    },
  },
  plugins: [],
};
