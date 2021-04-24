import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Books, Contact, Home, Skills } from "../Pages";

const useStyles = makeStyles({
  center: {
    "text-align": "center",
  },
  nav: {
    padding: "20px 0px 5px 0px",
  },
});

const set = (onClick) => (page) => () => onClick(page);

export default function Navigation({ onClick }) {
  const classes = useStyles();
  const setPage = set(onClick);
  return (
    <div className={`${classes.center} ${classes.nav}`}>
      <Button onClick={setPage(Home)}>Home</Button>
      <Button onClick={setPage(Skills)}>Skills</Button>
      <Button onClick={setPage(Books)}>Books</Button>
      <Button onClick={setPage(Contact)}>Contact</Button>
    </div>
  );
}
