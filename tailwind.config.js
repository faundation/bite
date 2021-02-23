module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#DED3FF",
          DEFAULT: "#5F2EEA",
          dark: "#2A00A2",
        },
        secondary: {
          light: "#D5F7FF",
          DEFAULT: "#1CC8EE",
          dark: "#0096B7",
        },
        error: {
          light: "#FFF2F7",
          DEFAULT: "#ED2E7E",
          dark: "#C30052",
        },
        success: {
          dark: "#00966D",
          DEFAULT: "#00BA88",
          light: "#F3FDFA",
        },
        warning: {
          dark: "#A26B00",
          DEFAULT: "#F4B740",
          light: "#FFF0D4",
        },
        vote: {
          up: {
            DEFAULT: "#a65400",
            deselect: "#FB7F00",
          },
          down: {
            DEFAULT: "#2d0082",
            deselect: "#4600CA",
          },
        },
        gradient: {
          primary: "linear-gradient(114.44deg, #7433FF 0%, #FFA3FD 100%)",
          secondary: "linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%)",
          accent: "linear-gradient(114.44deg, #EB0055 0%, #FFFA80 100%)",
        },
        gray: {
          title: "#14142B",
          body: "#4E4B66",
          label: "#6E7191",
          placeholder: "#A0A3BD",
          line: "#D6D8E7",
          input: "#EFF0F6",
          background: "#282B30",
          "off-white": "#FCFCFC",
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
