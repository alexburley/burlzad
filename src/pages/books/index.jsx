import React, { useState } from "react";
import items from "./items";
import BooksGrid from "../../components/books-grid";
import Container from "../../components/container";
import styled from "styled-components";

export const LEGEND_INDICATOR_MAP = {
  reread: `var(--color-accent-yellow)`,
  fiction: `var(--color-accent-green)`,
  nonfiction: `var(--color-accent-red)`,
  audiobook: `var(--color-accent-blue)`,
};

const CURRENT_YEAR = new Date().getFullYear();

const FILTERS = [
  { value: "reread", label: "Re-Read" },
  { value: "fiction", label: "Fiction" },
  { value: "nonfiction", label: "Non-Fiction" },
  { value: "audiobook", label: "Audiobook" },
];

function deriveStats(allItems) {
  return {
    total: allItems.length,
    thisYear: allItems.filter((b) => b.yearRead === CURRENT_YEAR).length,
    fiction: allItems.filter((b) => b.fiction).length,
    nonfiction: allItems.filter((b) => b.nonfiction).length,
    rereads: allItems.filter((b) => b.reread).length,
    audiobooks: allItems.filter((b) => b.audiobook).length,
  };
}

function applyFilters(allItems, activeFilters, search) {
  let result = allItems;

  if (activeFilters.length > 0) {
    result = result.filter((b) => activeFilters.some((f) => b[f]));
  }

  if (search.trim()) {
    const q = search.toLowerCase();
    result = result.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
    );
  }

  return result;
}

export default function BooksPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [search, setSearch] = useState("");

  const stats = deriveStats(items);
  const visibleItems = applyFilters(items, activeFilters, search);

  const toggleFilter = (value) => {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  return (
    <Container>
      <PageWrapper>
        <BooksGrid items={visibleItems} />
        <Sidebar>
          <StatsCard>
            <StatRow>
              <StatNumber>{stats.total}</StatNumber>
              <StatLabel>total books</StatLabel>
            </StatRow>
            <StatDivider />
            <StatRow>
              <StatNumber>{stats.thisYear}</StatNumber>
              <StatLabel>this year</StatLabel>
            </StatRow>
            <StatDivider />
            <StatRow>
              <StatNumber>{stats.fiction}</StatNumber>
              <StatLabel>fiction</StatLabel>
            </StatRow>
            <StatRow>
              <StatNumber>{stats.nonfiction}</StatNumber>
              <StatLabel>non-fiction</StatLabel>
            </StatRow>
            <StatRow>
              <StatNumber>{stats.rereads}</StatNumber>
              <StatLabel>re-reads</StatLabel>
            </StatRow>
            <StatRow>
              <StatNumber>{stats.audiobooks}</StatNumber>
              <StatLabel>audiobooks</StatLabel>
            </StatRow>
          </StatsCard>

          <SearchInput
            type="text"
            placeholder="Search title or author…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Legend>
            {FILTERS.map(({ value, label }) => {
              const active = activeFilters.includes(value);
              const dimmed = activeFilters.length > 0 && !active;
              return (
                <LegendItemWrapper
                  key={value}
                  active={active}
                  dimmed={dimmed}
                  onClick={() => toggleFilter(value)}
                >
                  <LegendIndicator color={LEGEND_INDICATOR_MAP[value]} />
                  <LegendValue>{label}</LegendValue>
                </LegendItemWrapper>
              );
            })}
          </Legend>
        </Sidebar>
      </PageWrapper>
    </Container>
  );
}

const PageWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
  min-width: 140px;
`;

const StatsCard = styled.div`
  background-color: var(--color-primary-contrast-high);
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
`;

const StatNumber = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-secondary);
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  color: var(--color-contrast);
  opacity: 0.7;
  text-align: right;
`;

const StatDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-primary-contrast-low);
  margin: 4px 0;
`;

const SearchInput = styled.input`
  background-color: var(--color-primary-contrast-high);
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  color: var(--color-contrast);
  font-size: 0.85rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--color-secondary);
  }
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-contrast-high);
  border-radius: 8px;
`;

const LegendItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  opacity: ${(p) => (p.dimmed ? 0.4 : 1)};
  background-color: ${(p) =>
    p.active ? "var(--color-primary-contrast-low)" : "transparent"};
  transition: background-color 150ms ease, opacity 150ms ease;

  &:hover {
    background-color: var(--color-primary-contrast-low);
  }
`;

const LegendIndicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  align-self: center;
  flex-shrink: 0;
`;

const LegendValue = styled.span`
  font-size: 0.85rem;
`;
