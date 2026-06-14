import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "../../router.jsx";

const links = [
  ["/", "Home"],
  ["/profile", "Work"],
  ["/books", "Library"],
  ["/now", "Now"],
  ["/blog", "Blog"],
];

export default function NavigationBar() {
  const [path] = useLocation();
  return (
    <Nav>
      {links.map(([route, title]) => {
        const active = route === "/" ? path === "/" : path.startsWith(route);
        return (
          <NavLinkStyled to={route} key={route} $active={active}>
            <span>{title}</span>
          </NavLinkStyled>
        );
      })}
    </Nav>
  );
}

const NavLinkStyled = styled(Link)`
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
    border-bottom: solid 2px ${(p) => (p.$active ? "var(--color-secondary)" : "transparent")};
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
