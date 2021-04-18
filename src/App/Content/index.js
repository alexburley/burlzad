import React from "react";

import HomeContent from "./HomeContent";
import ContactContent from "./ContactContent";
import BooksContent from "./BooksContent";

export default function Content({ content }) {
  if (content === "home") {
    return <HomeContent />;
  }
  if (content === "contact") {
    return <ContactContent />;
  }
  if (content === "books") {
    return <BooksContent />;
  }
  return <HomeContent />;
}
