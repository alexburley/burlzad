import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./components/navigation-bar";
import { BooksPage, HomePage, ProfilePage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetStyle from "./styles/reset-style";
import Theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
      rel="stylesheet"
    />
    <ResetStyle />
    <Theme />
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/books">
          <BooksPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
