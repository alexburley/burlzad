import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Nav from "./Navigation";
import { Books, Home, Skills } from "./Pages";

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

const renderPage = (page) => {
  if (page === "home") {
    return <Home />;
  } else if (page === "skills") {
    return <Skills />;
  } else if (page === "books") {
    return <Books />;
  }
  return <div>Error</div>;
};

function App() {
  const [page, setPage] = useState("home");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav onClick={setPage} />
      <Container maxWidth="md">{renderPage(page)}</Container>;
    </ThemeProvider>
  );
}

export default App;
