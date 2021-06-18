import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div id="register">
        <div>
          <h4>You cannot reserve during these times:</h4>
          {this.props.reservations.map((r) => {
            return (
              <div key={r.name}>
                {r.day} @ {r.time}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Register;
