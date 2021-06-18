import React, { Component } from "react";

class Landing extends Component {
  /* your code here */

  render() {
    return (
      <div>
        Welcome, {this.props.user}
        <div>
          the hottest item is {this.props.item.item} the price :{" "}
          {this.props.item.price}
        </div>
      </div>
    );
  }
}

export default Landing;
