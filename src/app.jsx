import React from "react";
import NavigationBar from "./components/navigation-bar/index.jsx";
import { BooksPage, HomePage, ProfilePage, NowPage, UsesPage } from "./pages/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/reset-style/index.js";
import Theme from "./styles/theme/index.js";
import styled from "styled-components";

export default function App() {
  return (
    <Main>
      <ResetStyle />
      <Theme />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/now" element={<NowPage />} />
        <Route path="/uses" element={<UsesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Spacer />
      </Router>
    </Main>
  );
}

const Main = styled.main`
  background-color: var(--color-primary);
  min-height: 100dvh;
  isolation: isolate;
`;

const Spacer = styled.div`
  height: 60px;
  width: 100%;
`;
