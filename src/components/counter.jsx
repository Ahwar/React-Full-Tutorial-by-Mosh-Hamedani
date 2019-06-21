import React, { Component } from "react";

class Counter extends Component {
  // constructor to bind this reference to the function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind();
  // }
  state = {
    // state to hold data about any component
    value: this.props.value
    // tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  handleIncrement = () => {
    // use arrow function so that we can access reference to the object using this
    this.setState({ value: this.state.value + 1 });
  };
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
    const { value } = this.state;
    return value === 0 ? "zero" : value; // state value is 0 then return zero otherwise return the original value state
  }
  // return classes according to value of value state
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
