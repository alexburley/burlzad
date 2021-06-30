import { Link, makeStyles, Typography } from "@material-ui/core";
import { Code, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  "banner-block": {
    textAlign: "center",
    paddingTop: "100px",
  },
  "banner-h1": {
    fontWeight: "bold",
  },
  icons: {
    paddingTop: "10px",
  },
});

export default function () {
  const classes = useStyles();
  return (
    <div className={`${classes["banner-block"]}`}>
      <Typography variant="h1" className={`${classes["banner-h1"]}`}>
        Alex Burley
      </Typography>
      <Typography variant="h4" className={`${classes["banner-h4"]}`}>
        Backend Software Engineer
      </Typography>
      <div className={classes.icons}>
        <span>
          {[
            { Icon: LinkedIn, url: "https://www.linkedin.com/in/alex-burley" },
            { Icon: GitHub, url: "https://github.com/alexburley" },
            { Icon: Code, url: "https://www.npmjs.com/~burlzad" },
          ].map(({ Icon, url }, index) => (
            <Link href={url} color="inherit" key={index}>
              <Icon
                style={{
                  width: 75,
                  height: 75,
                  padding: "10px",
                }}
              />
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
}
