import React from "react";
import Book from "./Book";
import items from "./items";
import { makeStyles, Typography } from "@material-ui/core";

const mapItem = (items) => {
  const years = {};
  items.forEach((item) => {
    const year = item.yearRead;
    if (years[year]) years[year].push(item);
    else years[year] = [item];
  });
  return years;
};

const useStyles = makeStyles({
  section: {
    paddingTop: "25px",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: "25px",
  },
  year: {
    paddingLeft: 30,
    paddingBottom: 10,
  },
});

export default function Books() {
  const classes = useStyles();
  const years = mapItem(items);
  return Object.keys(years)
    .sort()
    .reverse()
    .map((year) => {
      return (
        <div className={classes.section}>
          <Typography variant="h3" className={classes.year}>
            {year}
          </Typography>
          {years[year].map((book, index) => {
            return <Book item={book} key={index} />;
          })}
        </div>
      );
    });
}
