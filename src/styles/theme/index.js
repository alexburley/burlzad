import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  :root {
    --color-background-dark: #121212;
    --color-text-primary: #fff;
    --color-secondary: #FBBF24
  }

  body {
    background-color: #121212;
    color: #fff;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default Theme;
