import React from "react"
import PropTypes from "prop-types"
import { Button, Form, TextArea } from "semantic-ui-react"
import "./movie-form.scss"

import StarRating from "../star-rating/star-rating"

export default class MovieForm extends React.Component {
  static propTypes = {
    onInputChange: PropTypes.func,
    movie: PropTypes.object,
    onSubmit: PropTypes.func,
    setRating: PropTypes.func
  }

  handleChange = (event, {name}) => {
    const value = event.target.value
    this.props.onInputChange(name, value)
  }

  render() {
    return (
      <Form inverted onSubmit={this.props.onSubmit} className="movie-form">
        <Form.Group>
          <Form.Input
            width={8}
            label="Title"
            placeholder="Title"
            name="title"
            value={this.props.movie.title}
            onChange={this.handleChange}
          />
          <Form.Input
            width={6}
            label="UPC"
            placeholder="UPC"
            name="upc"
            value={this.props.movie.upc}
            onChange={this.handleChange}
          />
          <Form.Field width={2}>
            <label>Rating</label>
            <StarRating
              numberOfStars="5"
              currentRating={this.props.movie.rating}
              onClick={this.props.setRating}
            />
          </Form.Field>
        </Form.Group>
        <Form.Input
          label="Movie Image Url"
          placeholder="Movie Image Url"
          name="movie_image_url"
          value={this.props.movie.movie_image_url}
          onChange={this.handleChange}
        />
        <Form.Group widths="equal">
          <Form.Input
            label="Release Date"
            placeholder="Release Date"
            name="release_date"
            value={this.props.movie.release_date}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Runtime"
            placeholder="Runtime in minutes"
            name="runtime"
            value={this.props.movie.runtime}
            onChange={this.handleChange}
          />
          <Form.Input
            label="TMDB ID"
            placeholder="TMDB ID"
            name="tmdb_id"
            value={this.props.movie.tmdb_id}
            onChange={this.handleChange}
          />
          <Form.Input
            label="IMDB ID"
            placeholder="IMDB ID"
            name="imdb_id"
            value={this.props.movie.imdb_id}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field>
          <label>Description</label>
          <TextArea
            placeholder="Description"
            rows={2}
            name="description"
            value={this.props.movie.description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Input
          label="Tagline"
          placeholder="Tagline"
          name="tagline"
          value={this.props.movie.tagline}
          onChange={this.handleChange}
        />
        <Form.Field>
          <label>Notes</label>
          <TextArea
            placeholder="Notes"
            rows={2}
            name="notes"
            value={this.props.movie.notes}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button placeholder="submit" type="submit" className="custom-button">
          Save
        </Button>
      </Form>
    )
  }
}