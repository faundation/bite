module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),

    require("postcss-advanced-variables")({
      disable: "@import",
    }),
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "nesting-rules": true,
        "color-mod-function": { unresolved: "warn" },
        "custom-media-queries": true,
      },
    }),
    require("postcss-nested"),
    require("postcss-nested-ancestors"),
  ],
};
