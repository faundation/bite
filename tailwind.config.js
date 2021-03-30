module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gradient: {
          primary: "linear-gradient(180deg, #FFE14B 1.04%, #FFBA17 100%)",
          secondary: "linear-gradient(180deg, #424242 0%, #2C2C2C 100%)",
        },
      },
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "desk-sm": "2rem",
      "desk-md": "3rem",
      "desk-lg": "4rem",

      "desk-txt-xs": "0.875rem",
      "desk-txt-sm": "1rem",
      "desk-txt-md": "1.125rem",
      "desk-txt-lg": "1.5rem",

      "mobi-sm": "1rem",
      "mobi-md": "2rem",
      "mobi-lg": "3rem",

      "mobi-txt-xs": "0.75rem",
      "mobi-txt-sm": "0.875rem",
      "mobi-txt-md": "1rem",
      "mobi-txt-lg": "1.25rem",
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
  plugins: [require("@tailwindcss/typography")],
};
