import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes";

import { NotFound, Home } from "./../screens";

const RouterApp = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route exact path={AppRoutes.home} element={Home} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
