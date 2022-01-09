import React from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";

export default function DarkModeSwitch({ onClick, darkModeEnabled }) {
  const style = {
    width: 40,
    height: 40,
    margin: 0,
    color: "inherit",
  };
  return (
    <IconWrapper href="#" aria-label="Dark Mode Switch" onClick={onClick}>
      {darkModeEnabled ? <Sun style={style} /> : <Moon style={style} />}
    </IconWrapper>
  );
}

const IconWrapper = styled.a`
  background-color: var(--color-background-contrast);
  cursor: pointer;
  height: 50px;
  width: 50px;
  padding: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 8px;
  color: var(--color-contrast);
  :hover {
    color: var(--color-secondary);
  }
`;
