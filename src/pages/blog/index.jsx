import React from "react";
import styled from "styled-components";
import { Link } from "../../router.jsx";
import Container from "../../components/container";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <Container>
      <PageHeader>
        <Title>Blog</Title>
      </PageHeader>
      <PostList>
        {posts.map(({ slug, title, date, excerpt }) => (
          <PostItem key={slug}>
            <PostLink to={`/blog/${slug}`}>{title}</PostLink>
            <PostDate>
              {new Date(date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </PostDate>
            {excerpt && <PostExcerpt>{excerpt}</PostExcerpt>}
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
}

const PageHeader = styled.div`
  padding-top: 32px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
`;

const PostItem = styled.li``;

const PostLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--color-secondary);
  }
`;

const PostDate = styled.p`
  font-size: 0.8rem;
  opacity: 0.45;
  margin-top: 4px;
`;

const PostExcerpt = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 6px;
  line-height: 1.5;
`;
