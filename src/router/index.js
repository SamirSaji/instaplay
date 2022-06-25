import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes";

import { NotFound, Home, MovieDetail } from "./../screens";

const RouterApp = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Movie List page */}
        <Route exact path={AppRoutes.home} element={<Home />} />
        {/* Movie Detail page */}
        <Route exact path={AppRoutes.movieDetail} element={<MovieDetail />} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
