import React from "react";

import HomeContent from "./HomeContent";
import ContactContent from "./ContactContent";
import BooksContent from "./BooksContent";
import SkillsContent from "./SkillsContent";

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
  if (content === "skills") {
    return <SkillsContent />;
  }
  return <HomeContent />;
}
