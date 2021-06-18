import React, { Component } from "react";

class Hudini extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    let show;
    if (this.state.show) {
      show = <div>Now you see me</div>;
    } else {
      show = <div>Now you don’t</div>;
    }
    return <div>{show}</div>;
  }
}

export default Hudini;
