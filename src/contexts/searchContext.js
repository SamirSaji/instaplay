import React, { useState, createContext } from "react";

export const SearchContext = createContext();
const SearchContextProvider = (props) => {
  const [searchText, setSearchText] = useState("");

  const updateState = (data) => {
    setSearchText(data);
  };
  return (
    <SearchContext.Provider value={{ searchText, updateState }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
