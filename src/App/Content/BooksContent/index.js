import React from "react";
import BooksItem from "./BooksItem";
import "./style.css";
import items from "./items";

const mapItem = (items) => {
  const years = {};
  items.forEach((item) => {
    const year = item.yearRead;
    if (years[year]) years[year].push(item);
    else years[year] = [item];
  });
  return years;
};

export default function Books() {
  const years = mapItem(items);
  return Object.keys(years)
    .sort()
    .reverse()
    .map((year) => {
      return (
        <div className="YearContainer">
          <h3>{year}</h3>
          {years[year].map((book) => {
            return <BooksItem item={book} />;
          })}
        </div>
      );
    });
}
