import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button } from "semantic-ui-react"
import MovieForm from "../movie-form/movie-form"
import { omit } from "lodash"

export default class MovieEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {
        id: "",
        title: "",
        description: "",
        tagline: "",
        movie_image_url: "",
        tmdb_id: "",
        imdb_id: "",
        release_date: "",
        runtime: ""
      },
      owner: {
        id: "",
        upc: "",
        notes: "",
        rating: ""
      }
    }
  }

  componentDidMount() {
    const url = `/api/v1/movies/${this.props.match.params.id}`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(response => this.setState({
        movie: omit(response.movie, ["owner"]),
        owner: {
          id: response.movie.owner.id,
          upc: response.movie.owner.upc,
          notes: response.movie.owner.notes,
          rating: response.movie.owner.rating.toString()
        }
      }))
      .catch(() => this.props.history.push("/"))
  }

  handleChange = (name, value) => {
    if (name === "upc" || "notes") {
      this.setState({
        owner: { ...this.state.owner, [name]: value }
      })
    } else {
      this.setState({
        movie: { ...this.state.movie, [name]: value }
      })
    }
  }

  setRating = rating => {
    this.setState({
      owner: { ...this.state.owner, rating: rating }
    })
  }

  handleDelete = () => {
    console.log(this.state.movie)
    // this should only delete the owner record not the movie and cast
    // const token = document.getElementsByName("csrf-token")[0].content
    // fetch(`/api/v1/movies/${this.props.match.params.id}`, {
    //   method: "delete",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //     "X-Requested-With": "XMLHttpRequest",
    //     "X-CSRF-Token": token
    //   }
    // }).then(response => {
    //   if (response) {
    //     this.redirect()
    //   } else {
    //     this.setState({
    //       errors: data.errors
    //     })
    //   }
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const movie = {
      title: this.state.movie.title,
      description: this.state.movie.description,
      tagline: this.state.movie.tagline,
      movie_image_url: this.state.movie.tagline,
      tmdb_id: this.state.movie.tmdb_id.toString(),
      imdb_id: this.state.movie.imdb_id,
      release_date: this.state.movie.release_date,
      runtime: this.state.movie.runtime.toString(),
      owner_attributes: {
        id: this.state.owner.id,
        notes: this.state.owner.notes,
        upc: this.state.owner.upc,
        rating: this.state.owner.rating
      }
    }
    const token = document.getElementsByName("csrf-token")[0].content
    console.log(movie)

    fetch(`/api/v1/movies/${this.props.match.params.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token
      },
      body: JSON.stringify(movie)
    }).then(response => {
      return response.json()
    }).then(data => {
      if (data.movies) {
        this.redirect()
      } else {
        this.setState({
          errors: data.errors
        })
      }
    })
    .catch(error => console.log("api errors:", error))
  }

  redirect = () => {
    this.props.history.push("/movies")
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    const movie = this.state.movie
    const owner = this.state.owner

    const movieForm = (
      <MovieForm
        movie={movie}
        owner={owner}
        onSubmit={this.handleSubmit}
        onInputChange={this.handleChange}
        setRating={this.setRating}
      />
    )

    return (
      <Container>
        <div className="custom-header-container">
          <Header as="h1" className="movie-header">Movie</Header>
          <div>
            <Button className="custom-button" as={Link} to="/movies">
              Movies
            </Button>
            <Button className="custom-button" onClick={this.handleDelete}>
              Delete
            </Button>
          </div>
        </div>
        <Divider className="custom-divider" />
        {owner.id ? movieForm : null}
      </Container>
    )
  }
}