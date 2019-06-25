import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              onDelete={() => this.props.onDelete(counter.id)}
              onIncrement={() => this.props.onIncrement(counter)}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
