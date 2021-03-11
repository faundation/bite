import { addons } from '@storybook/addons';
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "PlaceHolder",
    brandUrl: "https://placeholder.com",
    brandImage: "https://picsum.photos/150/100",
  }),
  sidebar: {
    showRoots: false,
  },
});