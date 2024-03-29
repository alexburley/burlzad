import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`

  :root {
    --color-background-dark-10: hsl(0, 0%, 10%);
    --color-background-dark-15: hsl(0, 0%, 15%);
    --color-background-dark-20: hsl(0, 0%, 20%);

    --color-background-light-10: hsl(0, 0%, 90%);
    --color-background-light-20: hsl(0, 0%, 80%);


    --color-primary: ${(p) =>
      p.darkMode ? "var(--color-background-dark-10)" : "white"} ;
    --color-contrast: ${(p) =>
      p.darkMode ? "white" : "var(--color-background-dark-10)"};
     
     --color-primary-contrast-low: ${(p) =>
       p.darkMode
         ? "var(--color-background-dark-15)"
         : "var(--color-background-light-10)"} ;

     --color-primary-contrast-high: ${(p) =>
       p.darkMode
         ? "var(--color-background-dark-20)"
         : "var(--color-background-light-20)"} ;


    --color-secondary: hsl(43, 96%, 56%);

    --color-accent-blue: #1D4ED8;
    --color-accent-red:#B91C1C;
    --color-accent-yellow: hsl(43, 96%, 56%);
    --color-accent-green: #047857;
  }

  body {
    background-color: var(--color-primary);
    color: var(--color-contrast);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default Theme;
