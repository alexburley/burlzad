import React, { useState } from "react";
import NavigationBar from "./components/navigation-bar";
import { BooksPage, HomePage, ProfilePage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetStyle from "./styles/reset-style";
import Theme from "./styles/theme";
import DarkModeSwitch from "./components/dark-mode-switch";
import styled from "styled-components";

export default function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );
  return (
    <main>
      <ResetStyle />
      <Theme darkMode={darkModeEnabled} />
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
        <Spacer />
        <DarkModeSwitch
          darkModeEnabled={darkModeEnabled}
          onClick={() => setDarkModeEnabled(!darkModeEnabled)}
        />
      </Router>
    </main>
  );
}

const Spacer = styled.div`
  height: 60px;
  width: 100%;
`;
