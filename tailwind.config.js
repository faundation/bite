module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#FFBA17",
          DEFAULT: "#FFD500",
          light: "#FFE668",
        },
        secondary: {
          dark: "#2C2C2C",
          DEFAULT: "#424242",
          light: "#535353",
        },
      },
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      lg: "4.5rem",
      md: "3rem",
      sm: "2rem",
      xs: "1rem",
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    borderRadius: {
      none: "0",
      xs: ".5rem",
      sm: "1rem",
      DEFAULT: "1.875rem",
      md: "2rem",
      lg: "3.5rem",
      full: "9999px",
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
