import React from "react";
import items from "./items";
import BooksGrid from "../../components/books-grid";
import Container from "../../components/container";

export default function BooksPage() {
  return (
    <Container>
      <BooksGrid items={items} />
    </Container>
  );
}
