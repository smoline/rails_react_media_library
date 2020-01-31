import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button, Segment } from "semantic-ui-react"
import "./movies.scss"

import StarRating from "../star-rating/star-rating"

export default class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const url = "/api/v1/movies/index"
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(response => this.setState({ movies: response }))
      .catch(() => this.props.history.push("/"))
  }

  render() {
    const { movies } = this.state
    const allMovies = movies.map(({ id, title, movie_image_url, release_date, runtime, owner }, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div key={id} className="media-container">
          <Link to={`/movies/${id}`}>
            <div className="image-box"><img src={movie_image_url} /></div>
            <div className="text-container">
              <div className="media-title">
                <p>{title}</p>
              </div>
              <div className="media-row2">
                <StarRating
                  numberOfStars="5"
                  currentRating={owner.rating}
                />
              </div>
              <div className="media-row3">
                <p>{release_date}</p>
                <p>{runtime} mins</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ))
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
          <Button className="custom-button" as={Link} to="/movies/new">
            Add Movie
          </Button>
        </div>
        <Divider className="custom-divider" />
        <div className="main-container">
          {movies.length > 0 ? allMovies : noMovie}
        </div>
      </Container>
    )
  }
}