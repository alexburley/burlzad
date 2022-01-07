import React from "react";
import styled from "styled-components";

const ONE_MONTH_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 30;

const getConnectorHeight = (current, previous) => {
  const dateDifference = previous.getTime() - current.getTime();
  const steps = Math.floor(dateDifference / ONE_MONTH_IN_MILLISECONDS);
  const connectorHeight = steps * 10;
  const maxHeight = 240;
  const minHeight = 30;

  if (connectorHeight > maxHeight) return maxHeight;
  else if (connectorHeight < minHeight) return minHeight;
  else return connectorHeight;
};

export default function Timeline({ items = [] }) {
  return (
    <Wrapper>
      {items.map(({ date, label, tooltip }, index) => {
        const { date: previousDate } = items[index - 1] || { date: new Date() };
        return (
          <Section key={index}>
            <Connector
              end={!index ? 1 : 0}
              height={getConnectorHeight(date, previousDate)}
            />
            <Node>
              <NodeOrb tooltip={date} color={"hsla(52, 100%, 45%, 1)"}>
                <NodeTooltipWrapper>
                  <NodeTooltip>{tooltip}</NodeTooltip>
                </NodeTooltipWrapper>
              </NodeOrb>
              <NodeLabel>{label}</NodeLabel>
            </Node>
          </Section>
        );
      })}
    </Wrapper>
  );
}

const Section = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Connector = styled.div`
  background-color: white;
  width: 2px;
  height: ${({ height = 50 }) => `${height}px`};
  border-radius: ${(props) => (props.end ? "2px" : "0px")};
`;

const Node = styled.div`
  display: flex;
`;

const NodeLabel = styled.span`
  height: 0px;
  align-self: start;
  margin-left: 16px;
  font-size: 12px;
  line-height: 12px;
  margin-top: -1px;
  flex: 0 1 200px;

  @media (min-width: 600px) {
    font-size: 16px;
    line-height: 16px;
  }

  @media (max-width: 370px) {
    display: none;
  }
`;

const NodeTooltipWrapper = styled.div`
  background-color: var(--color-background-dark-15);
  position: absolute;
  padding: 4px 8px;
  left: 100%;
  top: 150%;
`;

const NodeTooltip = styled.span`
  visibility: inherit;
  font-size: 12px;
  color: var(--color-secondary);
  text-align: center;
  white-space: nowrap;
`;

const NodeOrb = styled.div`
  position: relative;
  background-color: white;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-left: -5px;

  :hover {
    background-color: ${(p) => p.color};
    ${NodeTooltipWrapper} {
      visibility: inherit;
    }
  }

  ${NodeTooltipWrapper} {
    visibility: hidden;
  }
`;
