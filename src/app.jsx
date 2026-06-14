import React, { useState } from "react";
import NavigationBar from "./components/navigation-bar/index.jsx";
import { BooksPage, HomePage, ProfilePage, NowPage } from "./pages/index.js";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ResetStyle from "./styles/reset-style/index.js";
import Theme from "./styles/theme/index.js";
import DarkModeSwitch from "./components/dark-mode-switch/index.jsx";
import styled, { keyframes } from "styled-components";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <PageWrapper key={location.pathname}>
      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </PageWrapper>
  );
}

export default function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <Main>
      <ResetStyle />
      <Theme darkMode={darkModeEnabled} />
      <Router>
        <NavigationBar />
        <AnimatedRoutes />
        <Spacer />
        <DarkModeSwitch
          darkModeEnabled={darkModeEnabled}
          onClick={() => setDarkModeEnabled(!darkModeEnabled)}
        />
      </Router>
    </Main>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = styled.main`
  background-color: var(--color-primary);
  min-height: 100dvh;
  isolation: isolate;
`;

const PageWrapper = styled.div`
  background-color: var(--color-primary);
  animation: ${fadeIn} 200ms ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Spacer = styled.div`
  height: 60px;
  width: 100%;
`;