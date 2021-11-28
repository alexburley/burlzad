import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  :root {
    --color-background-dark-10: hsl(0, 0%, 10%);
    --color-background-dark-15: hsl(0, 0%, 15%);
    --color-background-dark-20: hsl(0, 0%, 20%);
    --color-contrast: white;
    --color-secondary: hsl(43, 96%, 56%);

    --color-accent-blue: #1D4ED8;
    --color-accent-red:#B91C1C;
    --color-accent-yellow: hsl(43, 96%, 56%);
    --color-accent-green: #047857;
  }

  body {
    background-color: hsl(0, 0%, 10%);
    color: var(--color-contrast);
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default Theme;
