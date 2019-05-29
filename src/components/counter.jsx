import React, { Component } from "react";

class Counter extends Component {
  state = {
    // state to hold data about any component
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-3">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  // check the state count property and return value according to that value
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count; // state count is 0 then return zero otherwise return the original count state
  }
}

export default Counter;
