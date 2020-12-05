import React from "react";
import "./App.css";
import Nav from "./Nav/index";
function App() {
  return (
    <div className="app">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="app-container">
        <Nav />
      </div>
    </div>
  );
}

export default App;
