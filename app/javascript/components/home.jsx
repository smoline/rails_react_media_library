import React from "react"
import { Link } from "react-router-dom"
import { Container, Button, Header } from "semantic-ui-react"

export default () => (
  <Container>
    <Header as='h1'>
      Movies
    </Header>
    <p>
      A curated list of movies.
    </p>
    <hr />
    <div>
      <Button as={Link} to="/movies" className="custom-button">
        View Movies
      </Button>
    </div>
  </Container>
)