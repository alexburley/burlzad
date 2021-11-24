import React from "react";
import styled from "styled-components";

export default function Timeline({ items = [] }) {
  return (
    <Wrapper>
      {items.map(({ date, label }, index) => (
        <Section key={index}>
          <Connector end={!index} />
          <Node>
            <NodeOrb tooltip={date} color={"hsla(52, 100%, 45%, 1)"} />
            <NodeLabel>{label}</NodeLabel>
          </Node>
        </Section>
      ))}
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
  height: 50px;
  border-radius: ${(props) => (props.end ? "2px" : "0px")};
`;

const Node = styled.div`
  display: flex;
  position: relative;
`;

const NodeOrb = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-left: -5px;

  :hover {
    background-color: ${(p) => p.color};
  }
`;

const NodeLabel = styled.span`
  height: 0px;
  margin-left: 16px;
  font-size: 16px;
  line-height: 22px;
  margin-top: -6px;
  flex: 0 1 200px;
`;
