import React from "react";
import MovieDetail from "./movieDetail";
import { withNavBars } from "../../HOCs";

class MovieDetailParent extends React.Component {
  render() {
    return <MovieDetail />;
  }
}
export default withNavBars(MovieDetailParent);
