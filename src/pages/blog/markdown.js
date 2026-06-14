import { marked } from "marked";
import hljs from "highlight.js";

marked.use({
  renderer: {
    code({ text, lang }) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return `<pre><code class="hljs language-${language}">${hljs.highlight(text, { language }).value}</code></pre>`;
    },
  },
});

export { marked };
