import React from "react";
import FeedItem from "./FeedItem";
import items from "./items";

export default function FeedContent() {
  return (
    <div>
      <p>In Progress</p>
      {items.map((item) => (
        <div>
          <FeedItem item={item} />
          <hr />
        </div>
      ))}
    </div>
  );
}
