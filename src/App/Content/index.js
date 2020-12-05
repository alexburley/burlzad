import React, { useEffect, useState, useRef } from "react";

import FeedContent from "./FeedContent";
import WhipsnapContent from "./WhipsnapContent";
import ContactContent from "./ContactContent";
import LoaderContent from "./LoaderContent";

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
  return <FeedContent />;
}
