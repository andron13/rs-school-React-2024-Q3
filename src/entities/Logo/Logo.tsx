import { Component } from "react";

import imgSrc from "../../assets/images/logo.png";

class Logo extends Component {
  render() {
    return (
      <figure className="w-1/3">
        <a href="/" className="">
          <img src={imgSrc} alt="logo" />
        </a>
      </figure>
    );
  }
}

export default Logo;
