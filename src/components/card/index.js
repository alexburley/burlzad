import React from "react";
import styled from "styled-components";

export default function Card({ className, title, children }) {
  return (
    <Wrapper className={className}>
      <Header>{title}</Header>
      <Body>{children}</Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-background-light-dark);
  border-radius: 8px;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: var(--color-background-light-light-dark);
  width: 100%;
  padding: 8px 16px;
`;

const Body = styled.div`
  width: 100%;
  padding: 16px;
  height: 100%;
`;
