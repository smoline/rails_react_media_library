import React from "react"
import { Link } from "react-router-dom"
import { Container, Header, Divider, Button, Form, Segment, Modal } from "semantic-ui-react"
import { sortBy, reverse } from "lodash"
import MovieForm from "../movie-form/movie-form"
import "../movie-form/movie-form.scss"

export default class MovieNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {
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
        notes: "",
        upc: "",
        rating: ""
      },
      isSearching: true,
      results: [],
      value: "",
      modalOpen: false
    }
  }

  handleChange = (name, value) => {
    if (name === "rating" || "upc" || "notes") {
      this.setState({
        owner: { ...this.state.owner, [name]: value }
      })
    } else {
      this.setState({
        movie: { ...this.state.movie, [name]: value}
      })
    }
  }

  setRating = rating => {
    this.setState({ 
      owner: { ...this.state.owner, rating: rating }
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ value })
  }

  handleTitleSearch = () => {
    let title = { title: this.state.value }
    const token = document.getElementsByName("csrf-token")[0].content

    fetch("/api/v1/movies/movies_search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token
      },
      body: JSON.stringify(title)
    }).then(response => {
      return response.json()
    }).then(data => {
      if (data[0]) {
        var sortedResults = reverse(sortBy(data, ["release_date"]))
        this.setState({ results: sortedResults, modalOpen: !this.state.modalOpen })
      } else if(data.tmdb_id) {
        this.setState({ results: data})
        this.moreMovieInfo(data.tmdb_id.toString())
      } else {
        console.log(data.id)
        this.moreMovieInfo(data.id.toString())
      }
    })
    .catch(error => console.log("api errors:", error))
  }

  moreMovieInfo = (tmdb_id) => {
    let data = { tmdb_id: tmdb_id.toString() }
    const token = document.getElementsByName("csrf-token")[0].content

    fetch("/api/v1/movies/movie_info", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        movie: {
          ...this.state.movie,
          title: data.title,
          description: data.overview || data.description,
          tagline: data.tagline,
          movie_image_url: data.movie_image_url || `http://image.tmdb.org/t/p/w185/${data.poster_path}`,
          tmdb_id: data.tmdb_id || data.id,
          imdb_id: data.imdb_id,
          release_date: data.release_date,
          runtime: data.runtime,
        },
        isSearching: !this.state.isSearching
      })
    })
    .catch(error => console.log("api errors:", error))
  }

  changeSearch = () => this.setState({ isSearching: !this.state.isSearching })

  handleResultSelect = (result) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      movie: {
        ...this.state.movie,
        title: result.title,
        tmdb_id: result.tmdb_id || result.id
      }
    })
    this.moreMovieInfo(result.id)
  }

  handleModal = () => this.setState({ modalOpen: !this.state.modalOpen })

  resultsModal = (results) => (
    <Modal
      open={this.state.modalOpen}
      onClose={this.handleModal}>
      <Modal.Header>Select a Movie</Modal.Header>
      <Modal.Content>
        {results.map((result) => (
          <Modal.Description key={result.id} className="modal-choice">
            <button
              className="modal-text"
              onClick={() => this.handleResultSelect(result)}>
                <span style={{ fontWeight: 'bold' }}>{result.title}</span> - {result.release_date} - {result.overview}
            </button>
          </Modal.Description>
        ))}
      </Modal.Content>
    </Modal>
  )

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
      owners_attributes: {
        notes: this.state.owner.notes,
        upc: this.state.owner.upc,
        rating: this.state.owner.rating
      }
    }
    const token = document.getElementsByName("csrf-token")[0].content
    console.log(movie)

    fetch("/api/v1/movies", {
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
    const movie = this.state.movie
    const owner = this.state.owner
    const { value, results, modalOpen, isSearching } = this.state
   
    const searchForm = (
      <Form className="movie-form">
        <Form.Group>
          <Form.Input
            width={6}
            placeholder="Search..."
            name="search"
            value={value}
            onChange={this.handleSearchChange}
            action={
              <Button onClick={this.handleTitleSearch}>
                Search
              </Button>
            }
          />
          <Form.Field width={10}>
            <Segment>
              <Header>State</Header>
              <pre style={{ overflowX: 'auto' }}>
                {JSON.stringify(this.state, null, 2)}
              </pre>
            </Segment>
          </Form.Field>
        </Form.Group>
      </Form>
    )

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
          <Header as="h1" className="movie-header">Add Movie</Header>
          <div>
            {isSearching ? 
              <Button className="custom-button" onClick={this.changeSearch}>
                Movie Form
              </Button>
              :
              <Button className="custom-button" onClick={this.changeSearch}>
                Search By Title
              </Button>
            }
            <Button className="custom-button" as={Link} to="/movies">
              Movies
            </Button>
          </div>
        </div>
        <Divider className="custom-divider" />
        {modalOpen ? this.resultsModal(results) : null}
        {isSearching ? searchForm : movieForm}
      </Container>
    )
  }
}