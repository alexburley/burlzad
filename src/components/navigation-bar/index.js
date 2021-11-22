import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function NavigationBar() {
  const location = useLocation();
  const links = [
    ["/", "Home"],
    ["/profile", "Profile"],
    ["/books", "Library"],
  ].map(([route, title]) => {
    return (
      <NavLinkStyled
        active={location.pathname === route}
        to={route}
        key={route}
      >
        <span>{title}</span>
      </NavLinkStyled>
    );
  });
  return <Nav>{links}</Nav>;
}

const NavLinkStyled = styled(NavLink)`
  width: 50px;
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 1.25rem;

  span:hover {
    color: var(--color-secondary);
  }

  span {
    padding-bottom: 4px;
    border-bottom: ${(props) =>
      props.active ? "solid 2px var(--color-secondary)" : ""};
  }
`;

const Nav = styled.nav`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  gap: 24px;
`;
