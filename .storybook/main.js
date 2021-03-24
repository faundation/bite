const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    let rule = config.module.rules.find(
      (r) =>
        // it can be another rule with file loader
        // we should get only svg related
        r.test &&
        r.test.toString().includes("svg") &&
        // file-loader might be resolved to js file path so "endsWith" is not reliable enough
        r.loader &&
        r.loader.includes("file-loader")
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    config.watchOptions = {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: /node_modules/,
    };

    config.devtool = "eval";

    config.resolve.alias["#"] = resolve(__dirname, "../src/assets/");
    config.resolve.alias["@"] = resolve(__dirname, "../src/");

    config.module.rules.push({
      test: /\.svg$/i,
      use: ["vue-loader", "vue-svg-loader"],
    });

    return config;
  },
};
