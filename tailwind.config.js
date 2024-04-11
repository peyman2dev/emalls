/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "568px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        "IranYekan": "IranYekan"
      },
      colors: {
        main: "#2a2d53",
        secondary: "#ff5f55"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("chlild", "& > *");
      addVariant("chlild-hover", "& > *:hover");
    },
  ],
};
