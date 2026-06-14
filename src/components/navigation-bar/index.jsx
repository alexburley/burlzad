import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  ["/", "Home"],
  ["/profile", "Work"],
  ["/books", "Library"],
  ["/now", "Now"],
];

export default function NavigationBar() {
  return (
    <Nav>
      {links.map(([route, title]) => (
        <NavLinkStyled to={route} key={route} end={route === "/"}>
          <span>{title}</span>
        </NavLinkStyled>
      ))}
    </Nav>
  );
}

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: var(--color-contrast);
  font-size: 1.25rem;
  transition: color 150ms ease;

  &:hover span {
    color: var(--color-secondary);
  }

  span {
    padding-bottom: 4px;
    transition: border-color 150ms ease;
    border-bottom: solid 2px transparent;
  }

  &.active span {
    border-bottom-color: var(--color-secondary);
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
