import React, { useState } from "react";
import { Home } from "../Pages";
import { Container } from "@material-ui/core";

export default function Content() {
  const [content, setContent] = useState(Home);
  return <Container maxWidth="md">{content}</Container>;
}
