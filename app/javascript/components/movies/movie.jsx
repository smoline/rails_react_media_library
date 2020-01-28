import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button, Segment } from "semantic-ui-react"
import "./movies.scss"

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
    console.log(this.state)
    const movie = this.state.movie
    (
        <div key={movie.id} className="media-container">
          <Link to={`/movies/${movie.id}`}>
            <div className="image-box"><img src={movie.movie_image_url} /></div>
            <div className="text-container">
              <div className="media-title">
                <p>{title}</p>
              </div>
              <div className="media-row2">
                <StarRating
                  numberOfStars="5"
                  currentRating={movie.owner.rating}
                  onClick={this.setRating}
                />
              </div>
              <div className="media-row3">
                <p>{movie.release_date}</p>
                <p>{movie.runtime} mins</p>
              </div>
            </div>
          </Link>
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
          <Header as="h1" className="movie-header">Movies</Header>
          <Button inverted className="custom-button" as={Link} to="/movies">
            Add Movie
          </Button>
        </div>
        <Divider className="custom-divider" />

        <main className="container">
          <div className="main-container">
            {movie ? allMovies : noMovie}
          </div>
          <Link to="/" className="custom-button">
            Home
            </Link>
        </main>
      </Container>
    )
  }
}
export default Movie