import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "", poster: "" };
  }
  componentDidMount() {
    axios
      .get(`http://161.35.176.70/movies/${this.props.match.params.id}`)
      .then((response) =>
        this.setState({ movie: response.data, poster: response.data.image })
      );
  }
  render() {
    const { id, title, actor, description, genre, rating } = this.state.movie;
    return (
      <div>
        <img
          className=""
          width="300"
          height="225"
          src={
            this.state.poster === null
              ? "https://imageforproj.nyc3.digitaloceanspaces.com/Movie-Night.jpg"
              : `http://161.35.176.70${this.state.poster.url}`
          }
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />

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
