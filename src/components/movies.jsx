import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService"; // importing data of movies

class Movies extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Movies</h1>
        <table />
      </React.Fragment>
    );
  }
}

export default Movies;
