// pages/_app.js
import "../styles/global.css";

import React, { useEffect } from "react";

// Custom error handler component
class MyApp extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    // Custom error handling logic
    if (
      error.message.includes("Failed to execute 'end' on 'TimeRanges'") ||
      error.message.includes("IndexSizeError")
    ) {
      // Suppress the specific error
      console.warn("Suppressed an IndexSizeError");
    } else {
      // Log other errors
      super.componentDidCatch(error, errorInfo);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
