import React, { useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/container";
import { getPost } from "./posts";
import { marked } from "./markdown";

export default function PostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  const html = useMemo(() => (post ? marked(post.body) : ""), [post]);

  if (!post) {
    return (
      <Container>
        <p>Post not found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <HljsTheme />
      <PostHeader>
        <BackLink to="/blog">← Blog</BackLink>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>
          {new Date(post.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </PostDate>
      </PostHeader>
      <PostBody dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}

const HljsTheme = createGlobalStyle`
  .hljs {
    background: var(--color-primary-contrast-high);
    color: var(--color-contrast);
    padding: 1em;
    border-radius: 6px;
    overflow-x: auto;
  }
  .hljs-keyword, .hljs-selector-tag { color: #c678dd; }
  .hljs-string, .hljs-attr { color: #98c379; }
  .hljs-number, .hljs-literal { color: #d19a66; }
  .hljs-comment { color: var(--color-contrast); opacity: 0.4; font-style: italic; }
  .hljs-title, .hljs-name { color: #61afef; }
  .hljs-type, .hljs-built_in { color: #e5c07b; }
  .hljs-variable { color: #e06c75; }
`;

const PostHeader = styled.div`
  padding-top: 32px;
  margin-bottom: 40px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  font-size: 0.85rem;
  color: var(--color-secondary);
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 8px;
`;

const PostDate = styled.p`
  font-size: 0.8rem;
  opacity: 0.45;
`;

const PostBody = styled.article`
  max-width: 640px;
  line-height: 1.7;
  font-size: 1rem;

  h2, h3, h4 {
    margin-top: 2em;
    margin-bottom: 0.5em;
    font-weight: 600;
  }

  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.2rem; }

  p { margin-bottom: 1.2em; }

  a {
    color: var(--color-secondary);
    text-underline-offset: 3px;
  }

  pre {
    margin-bottom: 1.2em;
  }

  code:not(pre code) {
    background: var(--color-primary-contrast-high);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.88em;
  }

  ul, ol {
    padding-left: 1.5em;
    margin-bottom: 1.2em;
  }

  li { margin-bottom: 0.3em; }

  blockquote {
    border-left: 3px solid var(--color-secondary);
    padding-left: 1em;
    opacity: 0.75;
    margin: 0 0 1.2em;
  }
`;
