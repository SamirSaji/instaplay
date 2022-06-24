import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div
        container
        style={{ height: "100vh", width: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <div item>
          <p variant="h1">404</p>
          <p variant="h2">Page not Found</p>
          <a href="/" underline="hover">
            Go Home
          </a>
        </div>
      </div>
    );
  }
}

export default NotFound;
