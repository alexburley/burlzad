import React from "react";
import styled from "styled-components";

export default function TextIcon({ className, size, text, textColor }) {
  return (
    <Box className={className}>
      <Text size={size} textColor={textColor}>
        {text}
      </Text>
    </Box>
  );
}

const Box = styled.div`
  height: ${(p) => p.size};
  width: ${(p) => p.size};
`;

const Text = styled.span`
  line-height: ${(p) => p.size};
  font-weight: 700;
  padding: 4px;
  color: ${(p) => p.textColor || `var(--color-contrast)`};
`;
