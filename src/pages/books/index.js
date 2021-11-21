import React from "react";
import Book from "../../components/book-item";
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
  books: {
    display: "inline-flex",
    flexWrap: "wrap",
  },
  year: {
    paddingLeft: 30,
    paddingBottom: 10,
  },
});

export default function BooksPage() {
  const classes = useStyles();
  const years = mapItem(items);
  return Object.keys(years)
    .sort()
    .reverse()
    .map((year, index) => {
      return (
        <div className={classes.section} key={index}>
          <Typography variant="h3" className={classes.year}>
            {year}
          </Typography>
          <div className={classes.books}>
            {years[year].map((book, index) => {
              return <Book item={book} key={index} />;
            })}
          </div>
        </div>
      );
    });
}
