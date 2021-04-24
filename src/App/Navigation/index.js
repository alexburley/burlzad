import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  center: {
    "text-align": "center",
  },
  nav: {
    padding: "20px 0px 5px 0px",
  },
});

export default function Navigation({ onClick }) {
  const classes = useStyles();
  return (
    <div className={`${classes.center} ${classes.nav}`}>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/profile">
        <Button>Skills</Button>
      </Link>
      <Link to="/books">
        <Button>Books</Button>
      </Link>
    </div>
  );
}
