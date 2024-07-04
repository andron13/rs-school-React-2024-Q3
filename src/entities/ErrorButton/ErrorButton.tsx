import { Component } from "react";

import ErrorComponent from "../ErrorComponent";

interface ErrorButtonProps {}

interface ErrorButtonState {
  showComponent: boolean;
}

class ErrorButton extends Component<ErrorButtonProps, ErrorButtonState> {
  constructor(props: ErrorButtonProps) {
    super(props);
    this.state = { showComponent: false };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <div>
        <button
          onClick={this.toggleComponent}
          className="px-4 py-2 rounded-lg bg-red-300 text-white-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          ErrorButton
        </button>
        {this.state.showComponent && <ErrorComponent />}
      </div>
    );
  }
}
export default ErrorButton;
