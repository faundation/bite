import { addons } from '@storybook/addons';
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "BITE Vite Template",
    brandUrl: "https://bite.dev",
    brandImage: "https://user-images.githubusercontent.com/29407019/112463871-d50bae00-8d73-11eb-978d-6756ad20126a.png",
  }),
  sidebar: {
    showRoots: false,
  },
});