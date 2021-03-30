const { resolve } = require("path");
// import { WebpackOptions } from "webpack/declarations/WebpackOptions";

module.exports = {
  core: {
    builder: "webpack5",
  },
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
    config.module.rules = config.module.rules.map((rule) => {
      if (String(rule.test).includes("svg")) {
        const test = String(rule.test).replace("svg|", "").replace(/\//g, "");
        return { ...rule, test: new RegExp(test) };
      } else {
        return rule;
      }
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["vue-loader", "vue-svg-loader"],
    });

    config.watchOptions = {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: /node_modules/,
    };

    config.devtool = "eval";

    config.resolve.alias["#"] = resolve(__dirname, "../src/assets/");
    config.resolve.alias["@"] = resolve(__dirname, "../src/");

    return config;
  },
};
