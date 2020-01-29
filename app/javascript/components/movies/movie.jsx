import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button } from "semantic-ui-react"
import "./movie.scss"

import StarRating from "../star-rating/star-rating"

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    const url = `/api/v1/${window.location.pathname}`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(response => this.setState({ movie: response }))
      .catch(() => this.props.history.push("/"))
  }

  render() {
    console.log(this.props)
    const movie = this.state.movie
    const showMovie = (
      <div className="movie-show-main-container">
        <div className="movie-show-movie-container">
          <div className="movie-show-image-box"><img src={movie.movie_image_url} /></div>
          <div className="movie-show-text-container">
            <div className="movie-title">
              <h2>{movie.title}</h2>
            </div>
            <div className="movie-row-rating">
              <StarRating
                numberOfStars="5"
                currentRating="3"
                onClick={this.setRating}
              />
            </div>
            <div className="movie-row">
              <p>{this.state.movie.description}</p>
            </div>
            <div className="movie-row">
              <p>"...{this.state.movie.tagline}"</p>
            </div>
            <div className="movie-row">
              <p>Release Date: {this.state.movie.release_date}</p>
            </div>
            <div className="movie-row">
              <p>Runtime: {this.state.movie.runtime} mins</p>
            </div>
          </div>
        </div>
      </div>
    )
    const noMovie = (
      <div>
        <h4>
          No movies yet. Why not <Link to="/new_movie">create one</Link>
        </h4>
      </div>
    )

    return (
      <Container>
        <div className="custom-header-container">
          <Header as="h1" className="movie-header">{this.state.movie.title}</Header>
          <Button inverted className="custom-button" as={Link} to="/movies">
            Add Movie
          </Button>
        </div>
        <Divider className="custom-divider" />
        <div className="show-container">
          {movie ? showMovie : noMovie}
        </div>
        <Link to="/" className="custom-button">
          Home
        </Link>
      </Container>
    )
  }
}
export default Movie