import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Grid } from "@mui/material";
import { HeaderIcon } from "../../assets";
import { SearchBar } from "../searchbar";
import { useLocation, Link } from "react-router-dom";
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
  titleContainer: { padding: "16px 8px" },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const TopNavBar = (props) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            className={classes.titleContainer}
            justifyContent={"space-between"}
            rowGap={2}
          >
            <Link to="/">
              <HeaderIcon />
            </Link>
            {location.pathname === "/" && <SearchBar />}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
