import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import sections from "./content";

export default function UsesPage() {
  return (
    <Container>
      <PageHeader>
        <Title>Uses</Title>
        <Subtitle>Tools and hardware I use day to day.</Subtitle>
      </PageHeader>

      <Sections>
        {sections.map(({ heading, items }) => (
          <section key={heading}>
            <SectionHeading>{heading}</SectionHeading>
            <ItemList>
              {items.map(({ name, description, link }) => (
                <Item key={name}>
                  <ItemName>
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                    ) : (
                      name
                    )}
                  </ItemName>
                  <ItemDescription>{description}</ItemDescription>
                </Item>
              ))}
            </ItemList>
          </section>
        ))}
      </Sections>
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
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  opacity: 0.6;
  font-size: 0.95rem;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 600px;
`;

const SectionHeading = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: 16px;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.li``;

const ItemName = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 2px;

  a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const ItemDescription = styled.p`
  font-size: 0.88rem;
  opacity: 0.7;
  line-height: 1.5;
  margin: 0;
`;
