import { GitHub, Linkedin } from "react-feather";
import React from "react";
import styled from "styled-components";
import Container from "../../components/container";

export default function HomePage() {
  return (
    <Container>
      <BannerWrapper>
        <NameTitle>Alex Burley</NameTitle>
        <PositionTitle>Principal Software Engineer</PositionTitle>
        <IconsWrapper>
          {[
            { Icon: GitHub, url: "https://github.com/alexburley" },
            { Icon: Linkedin, url: "https://www.linkedin.com/in/alex-burley" },
          ].map(({ Icon, url }, index) => (
            <Link href={url} target="_blank" rel="noopener noreferrer" key={index}>
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
