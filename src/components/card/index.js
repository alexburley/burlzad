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
  background-color: var(--color-primary-contrast-low);
  border-radius: 8px;
  overflow: hidden;
  height: fit-content;
`;

const Header = styled.div`
  background-color: var(--color-primary-contrast-high);
  width: 100%;
  padding: 8px 16px;
  cursor: ${(p) => (p.onClick ? "pointer" : undefined)};
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: ${(p) => (p.show ? "" : "none")};
`;
