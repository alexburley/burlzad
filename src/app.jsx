import React, { useState } from "react";
import NavigationBar from "./components/navigation-bar/index.jsx";
import { BooksPage, HomePage, ProfilePage } from "./pages/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/reset-style/index.js";
import Theme from "./styles/theme/index.js";
import DarkModeSwitch from "./components/dark-mode-switch/index.jsx";
import styled from "styled-components";

export default function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    // window.matchMedia("(prefers-color-scheme:dark)").matches
    true
  );
  return (
    <main>
      <ResetStyle />
      <Theme darkMode={darkModeEnabled} />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Spacer />
        {/* <DarkModeSwitch */}
        {/* darkModeEnabled={darkModeEnabled} */}
        {/* onClick={() => setDarkModeEnabled(!darkModeEnabled)} */}
        {/* /> */}
      </Router>
    </main>
  );
}

const Spacer = styled.div`
  height: 60px;
  width: 100%;
`;