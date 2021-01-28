import React, { useEffect, useState, useRef } from "react";
import NavItem from "./NavItem";
import "./Nav.css";

const CONTENT = {
  FEED: "feed",
  LOADER: "loader",
  WHIPSNAP: "whipsnap",
  CONTACT: "contact",
  BOOKS: "books",
};

export default function Nav({ content, setContent }) {
  return (
    <div className="navbar">
      <NavItem
        content={"Feed"}
        identifer={CONTENT.FEED}
        onSubmit={setContent}
      />
      <NavItem
        content={"Loader"}
        identifer={CONTENT.LOADER}
        onSubmit={setContent}
      />
      <NavItem
        content={"Whipsnap"}
        identifer={CONTENT.WHIPSNAP}
        onSubmit={setContent}
      />
      <NavItem
        content={"Contact"}
        identifer={CONTENT.CONTACT}
        onSubmit={setContent}
      />
      <NavItem
        content={"Books"}
        identifer={CONTENT.BOOKS}
        onSubmit={setContent}
      />
    </div>
  );
}
