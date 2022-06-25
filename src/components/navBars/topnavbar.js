import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { LocalStorageKeys } from "../../utils";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    display: "block",
  },
  titleContainer: {
    marginLeft: theme.spacing(2),
  },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const TopNavBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h6" noWrap>
              Crayond Boilerplate
            </Typography>
            <Typography variant="caption">
              {`v${localStorage.getItem(LocalStorageKeys.version)}`}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
