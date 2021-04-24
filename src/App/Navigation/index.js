import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
      <Button onClick={setPage("home")}>Home</Button>
      <Button onClick={setPage("skills")}>Skills</Button>
      <Button onClick={setPage("books")}>Books</Button>
    </div>
  );
}
