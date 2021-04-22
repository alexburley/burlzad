import React, { useState } from "react";
import "./App.css";
import Content from "./Content";
import Nav from "./Nav/index";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#90ee90",
    },
  },
});

function App() {
  const [content, setContent] = useState("home");
  return (
    <div className="app">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <Nav setContent={setContent} content={content} />
          <Content content={content} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
