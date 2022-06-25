import React from "react";
import AppErrorBoundary from "./app.errorboundary";
import RouterApp from "./router";
import { CssBaseline } from "@mui/material";
import { AppTheme } from "./app.theme";

const App = () => {
  return (
    <AppErrorBoundary>
      <AppTheme>
        <CssBaseline>
          <RouterApp />
        </CssBaseline>
      </AppTheme>
    </AppErrorBoundary>
  );
};

export default App;
