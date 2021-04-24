import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  book: { textAlign: "left", padding: 5, display: "inline-flex" },
  year: { display: "inline-block" },
  label: {
    verticalAlign: "bottom",
    display: "block",
    textAlign: "center",
    maxWidth: 180,
  },
  // title: {
  //   paddingTop: 5,
  //   // fontSize: 14,
  //   // letterSpacing: 1,
  //   textAlign: "center",
  //   // fontWeight: "bold",
  // },
  author: { paddingTop: 5, fontSize: 12, textAlign: "center" },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    height: 250,
    border: "1px solid lightgray",
    borderRadius: 10,
  },
});

export default function BooksItem({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.book}>
      <img className={classes.image} alt={item.title} src={item.imgSrc}></img>
      <div>
        <Typography
          display="block"
          variant="subtitle1"
          className={classes.title}
        >
          {item.title}
        </Typography>
      </div>

      {/* <div className={classes.label}>
        <Typography variant="subtitle1" className={classes.title}>
          {item.title}
        </Typography>
        <div className={classes.author}>{item.author}</div> */}
      {/* </div> */}
    </div>
  );
}
