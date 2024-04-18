/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "0",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      xxl: "1580px",
    },
    extend: {
      container: {
        center: true,
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        IranYekan: "IranYekan",
        price: "price",
      },
      colors: {
        main: "#2a2d53",
        secondary: "#ff5f55",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
