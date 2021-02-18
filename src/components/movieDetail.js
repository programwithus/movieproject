import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "" };
  }
  componentDidMount() {
    axios
      .get(`http://161.35.176.70/movies/${this.props.match.params.id}`)
      .then((response) => this.setState({ movie: response.data }));
  }
  render() {
    const {
      id,
      title,
      actor,
      description,
      genre,
      image,
      rating,
    } = this.state.movie;
    return (
      <div>
        <h1>Title: {title}</h1>

        <h1>Genre: {genre}</h1>
        <h1></h1>
        <h1>Actor: {actor}</h1>
        <h1></h1>
        <h1>rating: {rating}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
export default MovieDetail;
