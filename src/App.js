import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
class App extends Component {
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
      <React.Fragment>
        <NavBar count={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.resetValues}
          />
        </main>
      </React.Fragment>
    );
  }
  handleDelete = counterId => {
    let filteredCounters = this.state.counters.filter(
      // return all the counters array except that counter whoes id is passed to handleMovieDelete method
      counter => counter.id !== counterId
    );
    this.setState({ counters: filteredCounters }); // set all counters list to state after the counter is removed from list
  };

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value = counters[index].value + 1;
    this.setState({ counters: counters });
  };

  resetValues = () => {
    let newCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: newCounters });
  };
}

export default App;
