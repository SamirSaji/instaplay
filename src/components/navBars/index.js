import React from "react";
import { TopNavBar } from "./topnavbar";

class TopNavbarParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TopNavBar />;
  }
}

export default TopNavbarParent;
