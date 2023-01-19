/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 100s linear infinite",
      },
      fontSize: {
        xxl: "1.4rem",
      },
      colors: {
        Pgreen: "#495E57",
        Pyellow: "#F4CE14",
        Sorange: "#EE9972",
        Sbage: "#FBDABB",
        Swhite: "#EDEFEE",
        Sgray: "#333333",
      },
      fontFamily: {
        primary: ["Markazi Text"],
        seconday: ["Karla"],
      },
    },
  },
  plugins: [],
};
