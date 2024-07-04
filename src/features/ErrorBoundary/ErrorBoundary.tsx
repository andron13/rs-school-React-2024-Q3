import { Component, ErrorInfo, ReactNode } from "react";

import imgSrc from "../../assets/images/break.png";

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <section className="h-screen flex flex-col items-center justify-center bg-red-100">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-lg text-red-600 mb-4">
            Please try refreshing the page or come back later.
          </p>
          <figure className="w-1/2 max-w-md">
            <img
              src={imgSrc}
              alt="Error illustration"
              className="rounded shadow-lg"
            />
          </figure>
        </section>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
