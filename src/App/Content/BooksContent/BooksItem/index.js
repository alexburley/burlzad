import React from "react";
import "./style.css";

export default function BooksItem({ item }) {
  return (
    <div className="BooksItem">
      <div className="Book">
        <img className="BookImage" alt={item.title} src={item.imgSrc}></img>
        <div className="BookLabel">
          <div className="BookTitle">{item.title}</div>
          <span className="BookBy">by</span>
          <div className="BookAuthor">{item.author}</div>
        </div>
      </div>
    </div>
  );
}
