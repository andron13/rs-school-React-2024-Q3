import { Component, ReactNode } from "react";

class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <div className="container mx-auto text-center">
          <p className="flex justify-evenly">
            <span>React Course 2024</span>
            <span>© andron13</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
