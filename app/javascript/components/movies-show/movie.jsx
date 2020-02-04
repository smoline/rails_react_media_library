import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button, Image } from "semantic-ui-react"
import "./movie.scss"

import StarRating from "../star-rating/star-rating"

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
      owner: {}
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
      .then(response => this.setState({ movie: response, owner: response.owner }))
      .catch(() => this.props.history.push("/"))
  }

  render() {
    const movie = this.state.movie
    const owner = this.state.owner
    const showMovie = (
      <div className="movie-show-main-container">
        <div className="movie-show-movie-container">
          <Image className="movie-show-image-box"><img src={movie.movie_image_url} /></Image>
          <div className="movie-show-text-container">
            <div className="movie-title">
              <h2>{movie.title}</h2>
            </div>
            <div className="movie-row-rating">
              <StarRating
                numberOfStars="5"
                currentRating={owner.rating}
                onClick={this.setRating}
              />
            </div>
            <div className="movie-row">
              <p>{movie.description}</p>
            </div>
            <div className="movie-row">
              <p>"...{movie.tagline}"</p>
            </div>
            <div className="movie-row">
              <p><span className="custom-label">Release Date: </span>{movie.release_date}</p>
            </div>
            <div className="movie-row">
              <p><span className="custom-label">Runtime: </span>{movie.runtime} mins</p>
            </div>
            <div className="movie-row">
              <p><span className="custom-label">Notes: </span>{movie.runtime}</p>
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
          <Header as="h1" className="movie-header">Movie</Header>
          <div>
            <Button className="custom-button" as={Link} to="/movies">
              Movies
            </Button>
            <Button className="custom-button" as={Link} to="/movies/new">
              Add
            </Button>
            <Button className="custom-button" as={Link} to={`/movies/${this.props.match.params.id}/edit`}>
              Edit
            </Button>
          </div>
        </div>
        <Divider className="custom-divider" />
        <div className="show-container">
          {movie && owner.rating ? showMovie : noMovie}
        </div>
      </Container>
    )
  }
}
export default Movie