import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import items from "../books/items";
import sections from "./content";

const currentBooks = items.filter((b) => b.yearRead === new Date().getFullYear()).slice(0, 3);

export default function NowPage() {
  return (
    <Container>
      <PageHeader>
        <Title>Now</Title>
        <Subtitle>
          What I'm up to at the moment.{" "}
          <SubtitleLink href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
            What's this?
          </SubtitleLink>
        </Subtitle>
        <Updated>Updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</Updated>
      </PageHeader>

      <Content>
        <Sections>
          {sections.map(({ heading, items }) => (
            <Section key={heading}>
              <SectionHeading>{heading}</SectionHeading>
              <ItemList>
                {items.map((item, i) => (
                  <Item key={i}>{item}</Item>
                ))}
              </ItemList>
            </Section>
          ))}
        </Sections>

        <Aside>
          <AsideHeading>Recently read</AsideHeading>
          {currentBooks.map(({ title, author, imgSrc }) => (
            <BookItem key={title}>
              <BookCover src={imgSrc} alt={title} loading="lazy" />
              <BookMeta>
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{author}</BookAuthor>
              </BookMeta>
            </BookItem>
          ))}
          <SeeAll href="/books">See all books →</SeeAll>
        </Aside>
      </Content>
    </Container>
  );
}

const PageHeader = styled.div`
  margin-bottom: 40px;
  padding-top: 32px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  opacity: 0.6;
  font-size: 0.95rem;
`;

const SubtitleLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover {
    color: var(--color-secondary);
  }
`;

const Updated = styled.p`
  margin-top: 6px;
  font-size: 0.8rem;
  opacity: 0.4;
`;

const Content = styled.div`
  display: flex;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Sections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Section = styled.div``;

const SectionHeading = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: 10px;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Item = styled.li`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;

  &::before {
    content: "— ";
    color: var(--color-secondary);
    opacity: 0.6;
  }
`;

const Aside = styled.div`
  width: 180px;
  flex-shrink: 0;
  position: sticky;
  top: 16px;

  @media (max-width: 600px) {
    width: 100%;
    position: static;
  }
`;

const AsideHeading = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: 12px;
`;

const BookItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const BookCover = styled.img`
  width: 40px;
  height: 56px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 2px;
`;

const BookMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const BookTitle = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.3;
`;

const BookAuthor = styled.span`
  font-size: 0.72rem;
  opacity: 0.6;
  font-style: italic;
`;

const SeeAll = styled.a`
  display: block;
  margin-top: 4px;
  font-size: 0.78rem;
  color: var(--color-secondary);
  text-decoration: none;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.7;
  }
`;
