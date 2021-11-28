import { Code, GitHub, Linkedin } from "react-feather";
import React from "react";
import styled from "styled-components";
import Container from "../../components/container";

export default function HomePage() {
  return (
    <Container>
      <BannerWrapper>
        <NameTitle>Alex Burley</NameTitle>
        <PositionTitle>Senior Software Engineer</PositionTitle>
        <IconsWrapper>
          {[
            { Icon: GitHub, url: "https://github.com/alexburley" },
            { Icon: Linkedin, url: "https://www.linkedin.com/in/alex-burley" },
            { Icon: Code, url: "https://www.npmjs.com/~burlzad" },
          ].map(({ Icon, url }, index) => (
            <Link href={url} target="#blank" color="inherit" key={index}>
              <Icon
                style={{
                  width: 75,
                  height: 75,
                  padding: "10px",
                }}
              />
            </Link>
          ))}
        </IconsWrapper>
      </BannerWrapper>
    </Container>
  );
}

const BannerWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;
const NameTitle = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  line-height: 100%;

  @media (max-width: 600px) {
    font-size: 5rem;
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
  gap: 18px;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    color: var(--color-secondary);
  }
`;
