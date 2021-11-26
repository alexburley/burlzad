import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  :root {
    --color-background-dark-10: hsl(0, 0%, 10%);
    --color-background-dark-15: hsl(0, 0%, 15%);
    --color-background-dark-20: hsl(0, 0%, 20%);
    --color-contrast: white;
    --color-secondary: hsl(43, 96%, 56%);

    --color-accent-blue: hsl(213, 94%, 68%);
    --color-accent-red: hsl(0, 91%, 71%);
    --color-accent-yellow: hsl(43, 96%, 56%);
  }

  body {
    background-color: var(--color-background-dark-10);
    color: var(--color-contrast);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default Theme;
