import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";
import NavigationBar from "./components/navigation-bar";
import { BooksPage, HomePage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationBar />
        <Container maxWidth="md">
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/books">
                <BooksPage />
              </Route>
              {/* <Route path="/profile">
                <Profile />
              </Route> */}
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Container>
        ;
      </Router>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
