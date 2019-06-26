import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onReset
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              onDelete={() => onDelete(counter.id)}
              onIncrement={() => onIncrement(counter)}
              onDecrement={() => onDecrement(counter)}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
