import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      // array to hold all counter's objects
      { id: 1, value: 1 },
      { id: 2, value: 4 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => {
          return <Counter key={counter.id} value={counter.value} />;
        })}
      </div>
    );
  }
}

export default Counters;
