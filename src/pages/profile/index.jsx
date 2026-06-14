import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import Timeline from "../../components/timeline";
import roles from "./roles";

export default function ProfilePage() {
  return (
    <Container>
      <Wrapper>
        <SideColumn>
          <Timeline items={roles} />
        </SideColumn>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  --top-gutter: 18px;
  display: flex;
  padding-top: var(--top-gutter);
  position: relative;
`;

const SideColumn = styled.div`
  min-width: 50px;
  max-width: 35%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0px;
`;
