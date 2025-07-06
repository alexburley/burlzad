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

  // const [skillCardState, setSkillCardState] = useState(initialCardState);
  const [roleCardState, setRoleCardState] = useState(initialCardState);

  // const reset = () => {
  //   // setSkillCardState(initialCardState);
  //   setRoleCardState(initialCardState);
  // };

  // const skills = skillsItems.map(({ children, title, tags }, index) => {
  //   return (
  //     <SkillCard
  //       title={getTitle(tags, title)}
  //       key={index}
  //       showingChildren={skillCardState[index]}
  //       setShowingChildren={() => {
  //         setSkillCardState({
  //           ...skillCardState,
  //           [index]: !skillCardState[index],
  //         });
  //       }}
  //       children={<CardContent>{children}</CardContent>}
  //     />
  //   );
  // });
  // TODO: Idea is to have a timeline of roles, with the latest role at the top, and then a list of projects that I have worked on in each role. The projects should be clickable and show more details about them.
  const rolesToDisplay = Object.values(
    roles.reduce((acc, role) => {
      const replacement = acc[role.tooltip] || {};
      return {
        ...acc,
        [role.tooltip]: {
          ...replacement,
          tooltip: role.tooltip,
          description: replacement.description || role.description,
          date: replacement.date || role.date,
          tenure: replacement.tenure || role.tenure,
        },
      };
    }, {})
  );

  const work = rolesToDisplay.map(
    ({ description, tooltip, date, tenure }, index) => {
      return (
        <RoleCard
          title={
            <div>
              <h3>
                {tooltip} -{" "}
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </h3>
              <h4>{tenure}</h4>
            </div>
          }
          key={index}
          showingChildren={roleCardState[index]}
          setShowingChildren={() => {
            setRoleCardState({
              ...roleCardState,
              [index]: !roleCardState[index],
            });
          }}
          children={
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </CardContent>
          }
        />
      );
    }
  );

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
        {/* <MainContent> */}
        {/* <MainContentHeader> */}
        {/* <SectionTitle>Work In Progress</SectionTitle> */}
        {/* <ResetButton onClick={reset} /> */}
        {/* </MainContentHeader> */}
        {/* <SkillsGrid>{skills}</SkillsGrid> */}
        {/* <SectionTitle>Roles</SectionTitle> */}
        {/* <ProjectsGrid>{work}</ProjectsGrid> */}
        {/* <SectionTitle>Projects</SectionTitle> */}
        {/* <ProjectsGrid>{projects}</ProjectsGrid> */}
        {/* </MainContent> */}
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

const MainContent = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const MainContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  flex: 1 0 180px;
  max-width: 360px;
`;

const RoleCard = styled(SkillCard)`
  min-width: 280px;
  p {
    padding: 4px 8px;
  }
  :hover {
    h3,
    h4 {
      color: var(--color-secondary);
    }
  }
`;

const ProjectCard = styled(Card)`
  flex: 1 0 180px;
  max-width: 360px;
`;

const CardContent = styled.div`
  font-size: 0.85rem;
  padding: 8px 16px;
  ul {
    padding-left: 8px;
  }
`;

const ResetButton = styled(Minimize2)`
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
  :hover {
    color: var(--color-secondary);
  }
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
  const titleTags = tags.map((tag, index) => {
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
        key={index}
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
