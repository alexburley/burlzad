import React, { useState } from "react";
import "./App.css";
import Content from "./Content";
import Nav from "./Nav/index";
function App() {
  const [content, setContent] = useState("home");
  return (
    <div className="app">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="app-container">
        <Nav setContent={setContent} content={content} />
        <Content content={content} />
      </div>
    </div>
  );
}

export default App;
