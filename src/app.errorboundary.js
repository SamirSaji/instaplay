import React from "react";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log("info:", info);
    console.log("error:", error);

    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service

    //TODO:
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>500 - Oops! Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
