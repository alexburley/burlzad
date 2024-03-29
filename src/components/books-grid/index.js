import React from "react";
import styled from "styled-components";

const groupItemsByYears = (items) => {
  const years = {};
  items.forEach((item) => {
    const year = item.yearRead;
    if (years[year]) years[year].push(item);
    else years[year] = [item];
  });
  return years;
};

export default function BooksGrid({ items }) {
  const years = groupItemsByYears(items);
  const books = Object.keys(years)
    .sort()
    .reverse()
    .map((year, index) => {
      return (
        <YearSectionWrapper key={index}>
          <YearHeading>{year}</YearHeading>
          <BookGrid>
            {years[year].map(
              (
                { title, imgSrc, author, reread, fiction, nonfiction },
                index
              ) => {
                return (
                  <BookItem key={index}>
                    <BookImageWrapper>
                      <BookImage alt={title} src={imgSrc}></BookImage>
                      {reread && <ReReadBanner />}
                      {fiction && <FictionBanner />}
                      {nonfiction && <NonFictionBanner />}
                    </BookImageWrapper>
                    <BookCaption>
                      <BookTitle>{title}</BookTitle>
                      <BookAuthor>{author}</BookAuthor>
                    </BookCaption>
                  </BookItem>
                );
              }
            )}
          </BookGrid>
        </YearSectionWrapper>
      );
    });
  return <Wrapper>{books}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const YearSectionWrapper = styled.div``;

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

const BookImageWrapper = styled.div``;

const BookImage = styled.img`
  width: 100%;
  height: 150px;
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
  background-color: var(--color-accent-red);
`;
