import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService"; // importing data of movies

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movies</h1>
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
          <button className="btn btn-danger m-2">Delete</button>
        </td>
      </tr>
    ));
  }
}

export default Movies;
