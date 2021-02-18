import React, { Component } from "react";
import axios from "axios";
import CardComponent from "./cardComponent";
import Pagination from "./pagination";
import { movieSelect } from "../util/movieselect";
import ButtonGroup from "./buttonGroup";

class ParentComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesOnPage: 4,
      currentPage: 1,
      allGenres: [],
      currentGenre: "",
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handlePageChange(page) {
    console.log(page);
    this.setState({ currentPage: page });
  }

  handleGenre(genre) {
    console.log("This is Genre", genre);
    this.setState({ currentGenre: genre });
  }

  getGenres(movies) {
    const allGenres = movies.map((m) => m.genre);
    // console.log("-->", allGenres);
    const uniqueGenres = ["All Genres", ...new Set(allGenres)];
    console.log("Genres", uniqueGenres);
    this.setState({ allGenres: uniqueGenres });
  }

  componentDidMount() {
    axios
      .get("http://161.35.176.70/movies")
      .then((response) =>
        this.setState({ movies: response.data }, this.getGenres(response.data))
      );
  }
  render() {
    const { movies, currentPage, moviesOnPage, currentGenre } = this.state;

    const filteredMovies =
      currentGenre && currentGenre !== "All Genres"
        ? movies.filter((m) => m.genre === currentGenre)
        : movies;

    console.log("Filtered", currentGenre, filteredMovies);
    const newmovies = movieSelect(filteredMovies, currentPage, moviesOnPage);
    return (
      <main>
        <div classname="album py-5 bg-light">
          <ButtonGroup
            genres={this.state.allGenres}
            clicking={this.handleGenre}
          />
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {newmovies.map((m) => (
                <CardComponent key={m.id} movie={m} />
              ))}
            </div>
            <Pagination
              numberOfMovies={filteredMovies.length}
              moviesOnPage={this.state.moviesOnPage}
              pageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default ParentComponet;
