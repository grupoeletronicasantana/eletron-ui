import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { ThemeProvider } from "styled-components";
import theme from "../src/styles/Theme";
import GlobalStyles from "../src/styles/GlobalStyles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#FFF" },
      ],
      default: "Light",
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: "default",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
