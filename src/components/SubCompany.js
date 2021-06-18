import React, { Component } from "react";

class SubCompany extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} {this.props.revenue}
        </h1>
      </div>
    );
  }
}

export default SubCompany;
