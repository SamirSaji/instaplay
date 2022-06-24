import React from "react";
import AppErrorBoundary from "./app.errorboundary";

const App = () => {
  return (
    <AppErrorBoundary>
      <div className="App">hello there</div>
    </AppErrorBoundary>
  );
};

export default App;
