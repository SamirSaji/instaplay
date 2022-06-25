import React from "react";
import AppErrorBoundary from "./app.errorboundary";
import RouterApp from "./router";
import { CssBaseline } from "@mui/material";
import { AppTheme } from "./app.theme";
import SearchContextProvider from "./contexts/searchContext";
const App = () => {
  return (
    <AppErrorBoundary>
      <AppTheme>
        <CssBaseline>
          <SearchContextProvider>
            <RouterApp />
          </SearchContextProvider>
        </CssBaseline>
      </AppTheme>
    </AppErrorBoundary>
  );
};

export default App;
