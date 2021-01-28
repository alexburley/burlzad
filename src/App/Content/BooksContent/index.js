import React from "react";
import BooksItem from "./BooksItem";
import items from "./items";

export default function Books() {
  return (
    <div>
      {items.map((item) => (
        <div>
          <BooksItem item={item} />
        </div>
      ))}
    </div>
  );
}
