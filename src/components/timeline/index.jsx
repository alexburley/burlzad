import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

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

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={ref} visible={visible}>
      {children}
    </Section>
  );
}

export default function Timeline({ items = [] }) {
  return (
    <Wrapper>
      {items.map(({ date, label, tooltip }, index) => {
        const { date: previousDate } = items[index - 1] || { date: new Date() };
        return (
          <AnimatedSection key={index}>
            <Connector
              end={!index ? 1 : 0}
              height={getConnectorHeight(date, previousDate)}
            />
            <Node>
              <NodeOrb tooltip={date}>
                <NodeTooltipWrapper>
                  <NodeTooltip>
                    <p>
                      {date.toLocaleString("en-GB", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                    <p>{tooltip}</p>
                  </NodeTooltip>
                </NodeTooltipWrapper>
              </NodeOrb>
              <NodeLabel>
                {label}
                <NodeCompany>{tooltip}</NodeCompany>
              </NodeLabel>
            </Node>
          </AnimatedSection>
        );
      })}
    </Wrapper>
  );
}

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Section = styled.div`
  opacity: 0;

  ${(p) =>
    p.visible &&
    css`
      animation: ${fadeSlideIn} 350ms ease forwards;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
      }
    `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Connector = styled.div`
  background-color: var(--color-contrast);
  width: 2px;
  height: ${({ height = 50 }) => `${height}px`};
  border-radius: ${(props) => (props.end ? "2px" : "0px")};
`;

const Node = styled.div`
  display: flex;
`;

const NodeLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-left: 16px;
  font-size: 12px;
  line-height: 14px;
  margin-top: -1px;
  flex: 0 1 200px;

  @media (min-width: 600px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media (max-width: 370px) {
    display: none;
  }
`;

const NodeCompany = styled.span`
  font-size: 11px;
  font-style: italic;
  opacity: 0.45;
  margin-top: 2px;

  @media (min-width: 600px) {
    font-size: 13px;
  }
`;

const NodeTooltipWrapper = styled.div`
  background-color: var(--color-primary-contrast-low);
  position: absolute;
  padding: 8px 12px;
  left: 20px;
  top: -20px;
  z-index: 1000;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: var(--color-primary-contrast-low);
  }
`;

const NodeTooltip = styled.div`
  font-size: 12px;
  color: var(--color-secondary);
  text-align: left;
  white-space: nowrap;

  p {
    margin: 0;
    line-height: 1.4;
  }

  p:first-child {
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

const NodeOrb = styled.div`
  position: relative;
  background-color: var(--color-contrast);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-left: -5px;
  transition: background-color 150ms ease;

  &:hover {
    background-color: var(--color-secondary);
    cursor: pointer;
    ${NodeTooltipWrapper} {
      visibility: visible;
      opacity: 1;
    }
  }

  ${NodeTooltipWrapper} {
    visibility: hidden;
    opacity: 0;
    transition: opacity 150ms ease;
  }
`;
