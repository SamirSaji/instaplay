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
    height: "calc(100% - 64px)",
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 56,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
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
