import React from "react";
import items from "./items";
import BooksGrid from "../../components/books-grid";
import Container from "../../components/container";
import styled from "styled-components";

export const LEGEND_INDICATOR_MAP = {
  reread: `var(--color-accent-yellow)`,
  fiction: `var(--color-accent-green)`,
  nonfiction: `var(--color-accent-red)`,
};

export default function BooksPage() {
  return (
    <Container>
      <Legend>
        {[
          { value: "reread", label: "Re-Read" },
          { value: "fiction", label: "Fiction" },
          { value: "nonfiction", label: "Non-Fiction" },
        ].map(({ value, label }) => (
          <LegendItemWrapper>
            <LegendIndicator color={LEGEND_INDICATOR_MAP[value]} />
            <LegendValue>{label}</LegendValue>
          </LegendItemWrapper>
        ))}
      </Legend>
      <BooksGrid items={items} />
    </Container>
  );
}

const LegendItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 6px 12px;
`;

const LegendIndicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  align-self: center;
`;

const LegendValue = styled.span``;

const Legend = styled.div`
  position: sticky;
  float: right;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  top: 16px;
  left: 85%;
  background-color: var(--color-primary-contrast-high);
  border-radius: 8px;
`;
