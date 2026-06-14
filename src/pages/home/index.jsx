import React from "react";
import styled from "styled-components";
import Container from "../../components/container";

function GitHub({ size = 24, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedIn({ size = 24, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <Container>
      <BannerWrapper>
        <NameTitle>Alex Burley</NameTitle>
        <PositionTitle>Principal Software Engineer</PositionTitle>
        <IconsWrapper>
          {[
            { Icon: GitHub, url: "https://github.com/alexburley" },
            { Icon: LinkedIn, url: "https://www.linkedin.com/in/alex-burley" },
          ].map(({ Icon, url }, index) => (
            <Link href={url} target="_blank" rel="noopener noreferrer" key={index}>
              <Icon size={75} style={{ padding: "10px" }} />
            </Link>
          ))}
        </IconsWrapper>
        <Avatar src="/images/avatar.png" alt="Cartoon of Alex" />
      </BannerWrapper>
    </Container>
  );
}

const BannerWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  @media (min-width: 600px) {
    margin-top: 75px;
  }
`;

const NameTitle = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  line-height: 100%;

  @media (min-width: 600px) {
    font-size: 6rem;
  }
`;

const PositionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 20px;
  line-height: 110%;
`;

const IconsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 9px;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    gap: 18px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 150ms ease;
  &:hover {
    color: var(--color-secondary);
  }
`;

const Avatar = styled.img`
  margin: auto;
  width: 240px;
  margin-top: 25px;
`;
