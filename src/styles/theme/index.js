import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  :root {
    --color-background-dark: hsl(0, 0%, 10%);
    --color-background-light-dark: hsl(0, 0%, 15%);
    --color-background-light-light-dark: hsl(0, 0%, 20%);
    --color-text-primary: #fff;
    --color-secondary: hsl(43, 96%, 56%)
  }

  body {
    background-color: #121212;
    color: #fff;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default Theme;
