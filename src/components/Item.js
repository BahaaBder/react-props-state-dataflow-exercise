import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <span>
          item : {this.props.item} price : {this.props.price}
        </span>
      </div>
    );
  }
}

export default Item;
