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
        onClick={
          setShowingChildren
            ? () => {
                setShowingChildren(!showingChildren);
              }
            : undefined
        }
      >
        {title}
      </Header>
      <Body show={showingChildren}>{children}</Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-background-dark-15);
  border-radius: 8px;
  overflow: hidden;
  height: fit-content;
`;

const Header = styled.div`
  background-color: var(--color-background-dark-20);
  width: 100%;
  padding: 8px 16px;
  cursor: ${(p) => (p.setShowingChildren ? "pointer" : undefined)};
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: ${(p) => (p.show ? "" : "none")};
`;
