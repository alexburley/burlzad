import React from "react";

export default function FeedItem({ item: { date, text } }) {
  return <p>{text}</p>;
}
