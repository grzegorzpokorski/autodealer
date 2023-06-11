import type { Preview } from "@storybook/react";

import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        none: {
          name: "none (100%)",
          styles: {
            width: "100%",
            height: "768px",
          },
        },
        sm: {
          name: "sm (640px)",
          styles: {
            width: "100%",
            maxWidth: "640px",
            height: "768px",
          },
        },
        md: {
          name: "md (768px)",
          styles: {
            width: "100%",
            maxWidth: "768px",
            height: "768px",
          },
        },
        lg: {
          name: "lg (1024px)",
          styles: {
            width: "100%",
            maxWidth: "1024px",
            height: "768px",
          },
        },
        xl: {
          name: "xl (1280px)",
          styles: {
            width: "100%",
            maxWidth: "1280px",
            height: "768px",
          },
        },
        "2xl": {
          name: "2xl (1536px)",
          styles: {
            width: "100%",
            maxWidth: "1536px",
            height: "768px",
          },
        },
      },
    },
  },
};

export default preview;
