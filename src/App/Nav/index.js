import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";

const CONTENT = {
  FEED: "feed",
  SKILLS: "skills",
  CONTACT: "contact",
  BOOKS: "books",
};

export default function Nav({ content, setContent }) {
  return (
    <div className="navbar">
      <NavItem
        content={"Home"}
        identifer={CONTENT.FEED}
        onSubmit={setContent}
      />
      {/* <NavItem
        content={"Skills"}
        identifer={CONTENT.SKILLS}
        onSubmit={setContent}
      /> */}
      <NavItem
        content={"Books"}
        identifer={CONTENT.BOOKS}
        onSubmit={setContent}
      />
      <NavItem
        content={"Contact"}
        identifer={CONTENT.CONTACT}
        onSubmit={setContent}
      />
    </div>
  );
}
