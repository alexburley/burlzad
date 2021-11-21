import React from "react";
import items from "./items";
import BooksGrid from "../../components/books-grid";

export default function BooksPage() {
  return <BooksGrid items={items} />;
}
