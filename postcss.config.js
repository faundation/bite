module.exports = {
  plugins: [
    require("tailwindcss"),
    require("@tailwindcss/jit"),
    require("autoprefixer"),

    require("postcss-advanced-variables")({
      disable: "@import",
    }),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
        "all-property": true,
        "double-position-gradients": true,
        "gap-properties": true,
        "gray-function": true,
        "hexadecimal-alpha-notation": true,
        "image-set-function": true,
        "media-query-ranges": true,
        "system-ui-font-family": true,
      },
    }),
  ],
};
