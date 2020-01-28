import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider } from "semantic-ui-react"
import "./movies.scss"

import StarRating from "../star-rating/star-rating"

class Movies extends React.Component {
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
    const allMovies = movies.map(({ id, title, movie_image_url, release_date, runtime }, index) => (
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
                  currentRating="3"
                  onClick={this.setRating}
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
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No movies yet. Why not <Link to="/new_movie">create one</Link>
        </h4>
      </div>
    )

    return (
      <Container>
        <Header as='h1' className='movie-header'>Movies for every occasion</Header>
        <p className="lead text-muted">
          We’ve pulled together our most popular movies, our latest
          additions, and our editor’s picks, so there’s sure to be something
          tempting for you to try.
        </p>
        <Divider className='custom-divider' />
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/movie" className="btn custom-button">
                Create New Movie
              </Link>
            </div>
            <div className="main-container">
              {movies.length > 0 ? allMovies : noMovie}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </Container>
    )
  }
}
export default Movies