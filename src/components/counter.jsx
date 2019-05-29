import React, { Component } from "react";

class Counter extends Component {
  state = {
    // state to hold data about any component
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  // check the state count property and return value according to that value
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count; // state count is 0 then return zero otherwise return the original count state
  }
  // return classes according to value of count state
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
