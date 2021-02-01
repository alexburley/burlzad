import React from "react";
import "./style.css";

export default function BooksItem({ item }) {
  return (
    <div className="BooksItem">
      <div className="Book">
        <div className="BookYear">{/* <span>{item.year}</span> */}</div>
        <img
          className="BookImage"
          alt="eye of the world"
          src={process.env.PUBLIC_URL + "/images/eye_of_the_world.jpeg"}
        ></img>
        <div className="BookLabel">
          <div className="BookTitle">The Eye of the World</div>
          <span className="BookBy">by</span>
          <div className="BookAuthor">Robert Jordan</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
