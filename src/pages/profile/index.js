import React, { useState } from "react";
import styled from "styled-components";
import { Minimize2 } from "react-feather";
import Container from "../../components/container";
import Timeline from "../../components/timeline";
import Card from "../../components/card";
import TextIcon from "../../components/text-icon";
import skillsItems, { BACKEND, DEVOPS, FRONTEND, MANAGEMENT } from "./skills";
import roles from "./roles";
import projectsItems from "./projects";

export default function ProfilePage() {
  const initialCardState = new Array(skillsItems.length)
    .map((_, index) => index)
    .reduce((acc, val) => ({ ...acc, [val]: false }), {});
  const [skillCardState, setSkillCardState] = useState(initialCardState);

  const reset = () => {
    setSkillCardState(initialCardState);
  };

  const skills = skillsItems.map(({ children, title, tags }, index) => {
    return (
      <SkillCard
        title={getTitle(tags, title)}
        key={index}
        showingChildren={skillCardState[index]}
        setShowingChildren={() => {
          setSkillCardState({
            ...skillCardState,
            [index]: !skillCardState[index],
          });
        }}
        children={<CardContent>{children}</CardContent>}
      />
    );
  });

  const projects = projectsItems.map(
    ({ name, description, tags, link }, index) => {
      return (
        <ProjectCard
          title={getTitle(
            tags,
            <TitleLink href={link} target="#blank">
              {name}
            </TitleLink>
          )}
          key={index}
          showingChildren={true}
          children={<CardContent>{description}</CardContent>}
        />
      );
    }
  );

  return (
    <Container>
      <Wrapper>
        <SideColumn>
          <Timeline items={roles} />
        </SideColumn>
        <MainContent>
          <ResetButton onClick={reset} />
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>{skills}</SkillsGrid>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>{projects}</ProjectsGrid>
        </MainContent>
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
  flex: 0 0 280px;
  min-width: 200px;
  max-width: 35%;
  display: flex;
  padding: 18px;
  padding-top: 0px;
`;

const MainContent = styled.div`
  flex: 1;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillCard = styled(Card)`
  flex: 1 0 240px;
`;

const ProjectCard = styled(Card)`
  flex: 1 0 240px;
`;

const CardContent = styled.div`
  font-size: 0.85rem;
  padding: 8px 16px;
  ul {
    padding-left: 8px;
  }
`;

const ResetButton = styled(Minimize2)`
  position: absolute;
  top: calc(var(--top-gutter) * -1);
  right: 0;
  cursor: pointer;

  :hover {
    color: var(--color-secondary);
  }
`;
const StyledTextIcon = styled(TextIcon)`
  background-color: ${(p) => `var(--color-accent-${p.backgroundColor})`};
  max-height: ${(p) => p.size};
  max-width: ${(p) => p.size};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const SectionTitle = styled.h2`
  padding: 30px;
  padding-left: 0px;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover {
    color: var(--color-secondary);
  }
`;
const getTitle = (tags, title) => {
  const titleTags = tags.map((tag) => {
    let backgroundColor;
    let text;
    if (tag === BACKEND) {
      backgroundColor = "red";
      text = "BE";
    }
    if (tag === FRONTEND) {
      backgroundColor = "blue";
      text = "FE";
    }
    if (tag === MANAGEMENT) {
      backgroundColor = "yellow";
      text = "MT";
    }
    if (tag === DEVOPS) {
      backgroundColor = "green";
      text = "OP";
    }
    return (
      <StyledTextIcon
        backgroundColor={backgroundColor}
        size="25px"
        text={text}
      />
    );
  });

  return (
    <TitleWrapper>
      {title}
      <TagWrapper>{titleTags}</TagWrapper>
    </TitleWrapper>
  );
};
