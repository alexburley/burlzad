import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./components/navigation-bar";
import { BooksPage, HomePage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetStyle from "./styles/reset-style";
import Theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <ResetStyle />
    <Theme />
    <Router>
      <NavigationBar />
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
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
