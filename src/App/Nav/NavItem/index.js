import React from "react";
import "./NavItem.css";

export default function NavItem({ content, onSubmit, identifer }) {
  const onclick = () => {
    onSubmit(identifer);
  };
  return (
    <div className="nav-item">
      <button onClick={onclick}>{content}</button>
    </div>
  );
}
