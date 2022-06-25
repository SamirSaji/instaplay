import React from "react";
import { makeStyles } from "@mui/styles";
import { TopNavBar } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  content: {
    width: "100%",
    overflow: "auto",

  },
  topNavbar: {},
}));

const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });

  return (
    <div className={classes.root}>
      {/*nav bars here */}
      <div className={classes.topNavbar}>
        <TopNavBar />
      </div>

      {/* Content */}
      <div className={classes.content}>
        <Component {...props}>{props.children}</Component>
      </div>
    </div>
  );
};

export default withNavBars;
