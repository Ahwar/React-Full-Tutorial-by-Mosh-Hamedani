import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService"; // importing data of movies

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    const count = this.state.movies.length;

    if (count === 0)
      return (
        <React.Fragment>
          <h1>Movies</h1>
          <p>There are no movies in database</p>
        </React.Fragment>
      );
    // if previous return statement does not execute then the second one will automatically executed if
    // if previous return statement execute then the second one will not be executed
    return (
      <React.Fragment>
        <h1>Movies</h1>
        <p>There are {count} movies in database</p>
        <table className="table">
          {/* { table heading} */}
          <thead>
            <tr>
              <th>name</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>{this.renderMoviesInTable()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  // function to render all movies data in the form of table rows
  renderMoviesInTable() {
    return this.state.movies.map(movie => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.numberInStock}</td>
        <td>
          <button
            onClick={() => this.handleMovieDelete(movie._id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
  handleMovieDelete(movieId) {
    let filteredMovies = this.state.movies.filter(
      // return all the movies array except that movie whoes id is passed to handleMovieDelete method
      movie => movie._id !== movieId
    );
    this.setState({ movies: filteredMovies }); // set all movies list to state after the movie is removed from list
  }
}

export default Movies;
