import React from "react";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { SearchIcon } from "../../assets";
import { useStyles } from "./style";
import { SearchContext } from "../../contexts/searchContext";

export const SearchBar = () => {
  const classes = useStyles();
  const { updateState } = React.useContext(SearchContext);

  // Debounce Funciton
  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // invoke debounce function and update state
  const updateFunc = debounce(function (data) {
    updateState(data);
  }, 1000);

  const handleupdate = (e) => {
    e.persist();
    updateFunc(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center" }}
      className={classes.searchBarGrid}
    >
      <InputBase
        sx={{ ml: 2 }}
        placeholder="Search Movies"
        className={classes.inputText}
        onChange={handleupdate}
      />

      <Button className={classes.buttonstyle}>
        <SearchIcon />
      </Button>
    </Paper>
  );
};
