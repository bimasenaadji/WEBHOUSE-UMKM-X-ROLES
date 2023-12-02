/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        fontRed: "#dc2626",
        fontYellow: "#f59e0b",
        button: "#E2293F",
        menu: "#D9D9D9",
        bgPrimary: "#101010",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
