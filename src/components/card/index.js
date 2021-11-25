import React from "react";
import styled from "styled-components";

export default function Card({
  className,
  title,
  children,
  setShowingChildren,
  showingChildren,
}) {
  return (
    <Wrapper className={className}>
      <Header
        onClick={() => {
          setShowingChildren(!showingChildren);
        }}
      >
        {title}
      </Header>
      <Body show={showingChildren}>{children}</Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-background-light-dark);
  border-radius: 8px;
  overflow: hidden;
  height: fit-content;
`;

const Header = styled.div`
  background-color: var(--color-background-light-light-dark);
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: ${(p) => (p.show ? "" : "none")};
`;
