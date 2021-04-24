import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Nav from "./Navigation";
import { Home } from "./Pages";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    background: {
      default: "#263238",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  const [content, setContent] = useState(Home);
  return (
    <div className="app">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav onClick={setContent} />
        <Container maxWidth="md">{content}</Container>;
      </ThemeProvider>
    </div>
  );
}

export default App;
