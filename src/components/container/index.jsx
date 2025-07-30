import React from "react";
import styled from "styled-components";

export default function Container({ className, children, padding }) {
  return (
    <StyledContainer padding={padding} className={className}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 18px 36px;
`;
