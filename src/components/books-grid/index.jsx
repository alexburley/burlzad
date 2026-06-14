import React from "react";
import styled from "styled-components";

export default function BooksGrid({ items }) {
  const byYear = Object.groupBy(items, (b) => b.yearRead);
  return (
    <Wrapper>
      {Object.keys(byYear).sort().reverse().map((year) => (
        <section key={year}>
          <YearHeading>{year}</YearHeading>
          <BookGrid>
            {byYear[year].map(({ title, imgSrc, author, reread, fiction, nonfiction, audiobook }, index) => (
              <BookItem key={index}>
                <div>
                  <BookImage alt={title} src={imgSrc} />
                  {reread && <ReReadBanner />}
                  {fiction && <FictionBanner />}
                  {nonfiction && <NonFictionBanner />}
                  {audiobook && <AudiobookBanner />}
                </div>
                <BookCaption>
                  <BookTitle>{title}</BookTitle>
                  <BookAuthor>{author}</BookAuthor>
                </BookCaption>
              </BookItem>
            ))}
          </BookGrid>
        </section>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const YearHeading = styled.h3`
  font-size: 1.5rem;
`;

const BookGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const BookItem = styled.article`
  flex: 0 1 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BookImage = styled.img.attrs({ loading: "lazy" })`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const BookCaption = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookTitle = styled.span`
  font-weight: 500;
`;

const BookAuthor = styled.span`
  display: block;
  font-style: italic;
`;

const Banner = styled.div`
  height: 4px;
`;

const ReReadBanner = styled(Banner)`
  background-color: var(--color-accent-yellow);
`;

const FictionBanner = styled(Banner)`
  background-color: var(--color-accent-green);
`;

const NonFictionBanner = styled(Banner)`
  background-color: var(--color-accent-blue);
`;

const AudiobookBanner = styled(Banner)`
  background-color: var(--color-accent-red);
`;
