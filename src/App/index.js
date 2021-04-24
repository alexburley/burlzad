import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Nav from "./Navigation";
import { Books, Home, Profile } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Container maxWidth="md">
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/books">
                <Books />
              </Route>
              {/* <Route path="/profile">
                <Profile />
              </Route> */}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Container>
        ;
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
