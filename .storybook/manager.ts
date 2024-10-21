import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const customTheme = create({
  base: "dark",
  brandTitle: "Eletron UI",
  brandUrl: "https://www.eletronicasantana.com.br",
  brandImage: "/eletron-ui-column.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme: customTheme,
});
