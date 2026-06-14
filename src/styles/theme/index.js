import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  :root {
    --color-background-dark-10: hsl(0, 0%, 10%);
    --color-background-dark-15: hsl(0, 0%, 15%);
    --color-background-dark-20: hsl(0, 0%, 20%);

    --color-background-light-10: hsl(0, 0%, 90%);
    --color-background-light-20: hsl(0, 0%, 80%);

    --color-primary: white;
    --color-contrast: var(--color-background-dark-10);
    --color-primary-contrast-low: var(--color-background-light-10);
    --color-primary-contrast-high: var(--color-background-light-20);

    --color-secondary: hsl(43, 96%, 56%);

    --color-accent-blue: #1D4ED8;
    --color-accent-red: #B91C1C;
    --color-accent-yellow: var(--color-secondary);
    --color-accent-green: #047857;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-primary: var(--color-background-dark-10);
      --color-contrast: white;
      --color-primary-contrast-low: var(--color-background-dark-15);
      --color-primary-contrast-high: var(--color-background-dark-20);
    }
  }

  html,
  body {
    background-color: var(--color-primary);
  }

  body {
    color: var(--color-contrast);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default Theme;
