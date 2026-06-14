const modules = import.meta.glob("./posts/*.md", { query: "?raw", import: "default", eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = Object.fromEntries(
    match[1].split("\n").filter(Boolean).map((line) => {
      const [key, ...val] = line.split(":");
      return [key.trim(), val.join(":").trim()];
    })
  );
  return { meta, body: match[2] };
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace("./posts/", "").replace(".md", "");
    const { meta, body } = parseFrontmatter(raw);
    return { slug, body, ...meta };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
