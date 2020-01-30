import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button, Form, TextArea } from "semantic-ui-react"
import "./movie-new.scss"

import StarRating from "../star-rating/star-rating"

export default class MovieNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      tagline: "",
      movie_image_url: "",
      tmdb_id: "",
      imdb_id: "",
      release_date: "",
      runtime: "",
      notes: "",
      upc: "",
      rating: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  setRating = rating => {
    this.setState({ rating: rating })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const movie = this.state
    const token = document.getElementsByName("csrf-token")[0].content

    fetch("/movies/create", {
      method: "post",
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
      if (data) {
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
    console.log(this.state)
    const { title, description, tagline, movie_image_url, tmdb_id, imdb_id, release_date, runtime, notes, upc, rating } = this.state
    return (
      <Container>
        <div className="custom-header-container">
          <Header as="h1" className="movie-header">Add Movie</Header>
          <div>
            <Button className="custom-button" as={Link} to="/movies">
              Movies
            </Button>
          </div>
        </div>
        <Divider className="custom-divider" />
        <Form inverted onSubmit={this.handleSubmit} className="movie-form">
          <Form.Group>
            <Form.Input
              width={8}
              label="Title"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <Form.Input
              width={6}
              label="UPC"
              placeholder="UPC"
              name="upc"
              value={upc}
              onChange={this.handleChange}
            />
            <Form.Field width={2}>
              <label>Rating</label>
              <StarRating
                numberOfStars="5"
                currentRating={rating}
                onClick={this.setRating}
              />
            </Form.Field>
          </Form.Group>
          <Form.Input
            label="Movie Image Url"
            placeholder="Movie Image Url"
            name="movie_image_url"
            value={movie_image_url}
            onChange={this.handleChange}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Release Date"
              placeholder="Release Date"
              name="release_date"
              value={release_date}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Runtime"
              placeholder="Runtime in minutes"
              name="runtime"
              value={runtime}
              onChange={this.handleChange}
            />
            <Form.Input
              label="TMDB ID"
              placeholder="TMDB ID"
              name="tmdb_id"
              value={tmdb_id}
              onChange={this.handleChange}
            />
            <Form.Input
              label="IMDB ID"
              placeholder="IMDB ID"
              name="imdb_id"
              value={imdb_id}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field>
            <label>Description</label>
            <TextArea
              placeholder="Description"
              rows={2}
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Input
            label="Tagline"
            placeholder="Tagline"
            name="tagline"
            value={tagline}
            onChange={this.handleChange}
          />
          <Form.Field>
            <label>Notes</label>
            <TextArea
              placeholder="Notes"
              rows={2}
              name="Notes"
              value={notes}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button placeholder="submit" type="submit" className="custom-button">
            Save
          </Button>
        </Form>
      </Container>
    )
  }
}