import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    // this.state = this.props
  }
  componentDidMount() {
    console.log("App - Componentdidmounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("the component is updated");
    console.log("Previous Props are : ", prevProps);
    console.log("Previous State is : ", prevState);
    if (prevState !== this.props) {
      // do the ajax call to upload new data
    }
  }
  state = {
    counters: [
      // array to hold all counter's objects
      { id: 1, value: 1 },
      { id: 2, value: 4 },
      { id: 3, value: 2 },
      { id: 4, value: 8 },
      { id: 5, value: 19 }
    ]
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar count={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.resetValues}
          />
          <Movies />
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
  handleDecrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value = counters[index].value - 1;
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
