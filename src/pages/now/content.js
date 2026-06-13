import raw from "./content.md?raw";

const sections = raw
  .split(/^## /m)
  .filter(Boolean)
  .map((chunk) => {
    const [heading, ...rest] = chunk.split("\n");
    const items = rest
      .join("\n")
      .split(/\n\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
    return { heading: heading.trim(), items };
  });

export default sections;
