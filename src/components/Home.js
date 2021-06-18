import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    let storeArray = this.props.store;
    return (
      <div>
        {storeArray.map((i) => (
          <Item item={i.item} price={i.price} />
        ))}
      </div>
    );
  }
}

export default Home;
