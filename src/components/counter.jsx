import React, { Component } from "react";

class Counter extends Component {
  // constructor to bind this reference to the function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind();
  // }
  componentWillUnmount() {
    console.log("Counter - Component will unmount");
  }
  render() {
    const { onIncrement, onDecrement, onDelete, value } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        </div>
        <div className="col">
          <button
            onClick={onIncrement}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={onDecrement}
            disabled={!value}
            className="btn btn-secondary btn-sm m-1"
          >
            -
          </button>
          <button onClick={onDelete} className="btn btn-danger btn-sm m-1">
            x
          </button>
          {/* {this.renderTags()} */}
        </div>
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
