import React, { useEffect, useState, useRef } from "react";

import FeedContent from "./FeedContent";
import WhipsnapContent from "./WhipsnapContent";
import ContactContent from "./ContactContent";
import LoaderContent from "./LoaderContent";
import BooksContent from "./BooksContent";

export default function Content({ content }) {
  if (content === "feed") {
    return <FeedContent />;
  }
  if (content === "whipsnap") {
    return <WhipsnapContent />;
  }
  if (content === "contact") {
    return <ContactContent />;
  }
  if (content === "loader") {
    return <LoaderContent />;
  }
  if (content === "books") {
    return <BooksContent />;
  }
  return <FeedContent />;
}
