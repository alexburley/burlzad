import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  book: { textAlign: "left", padding: 5 },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    maxHeight: 200,
    // maxWidth: 150,
    border: "0.5px solid lightgray",
    borderRadius: 10,
  },
  label: {
    textAlign: "center",
    maxWidth: 150,
  },
  title: {
    lineHeight: 1.5,
    paddingTop: 5,
  },
});

export default function BooksItem({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.book}>
      <img className={classes.image} alt={item.title} src={item.imgSrc}></img>
      <div className={classes.label}>
        <Typography variant="subtitle1" className={classes.title}>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.author}>
          {item.author}
        </Typography>
      </div>
    </div>
  );
}
