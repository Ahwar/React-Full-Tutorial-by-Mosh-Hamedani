import React, { Component } from "react";

class Counter extends Component {
  // constructor to bind this reference to the function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind();
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>there is not tag</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  */
  // check the state value property and return value according to that value
  formatValue() {
    const { value } = this.props;
    return value === 0 ? "zero" : value; // state value is 0 then return zero otherwise return the original value state
  }
  // return classes according to value of value state
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
