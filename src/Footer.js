import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="tc bg-black pa2">
        <h2 className="tc white">Copyright &copy;{new Date().getFullYear()}</h2>
      </div>
    );
  }
}

export default Footer;
