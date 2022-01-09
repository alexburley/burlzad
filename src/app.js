import React, { useState } from "react";
import NavigationBar from "./components/navigation-bar";
import { BooksPage, HomePage, ProfilePage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetStyle from "./styles/reset-style";
import Theme from "./styles/theme";
import DarkModeSwitch from "./components/dark-mode-switch";

export default function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  return (
    <main>
      <ResetStyle />
      <Theme darkMode={darkModeEnabled} />
      <DarkModeSwitch
        darkModeEnabled={darkModeEnabled}
        onClick={() => setDarkModeEnabled(!darkModeEnabled)}
      />
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
    </main>
  );
}
