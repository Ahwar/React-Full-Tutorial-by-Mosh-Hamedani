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
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              onDelete={() => this.handleDelete(counter.id)}
            />
          );
        })}
      </div>
    );
  }
  handleDelete = (counterId) => {
    let filteredCounters = this.state.counters.filter(
      // return all the counters array except that counter whoes id is passed to handleMovieDelete method
       counter => counter.id !== counterId
    );
    console.log(filteredCounters);
    this.setState({ counters: filteredCounters }); // set all counters list to state after the counter is removed from list
  };
}

export default Counters;
