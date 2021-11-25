import React from "react";
import styled from "styled-components";

export default function Card({ title, children }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Body>{children}</Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-background-light-dark);
  border-radius: 8px;
  overflow: hidden;
  flex: 0 1 300px;
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
