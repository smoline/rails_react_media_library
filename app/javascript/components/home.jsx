import React from "react"
import { Link } from "react-router-dom"
import { Container, Button, Header } from "semantic-ui-react"

export default () => (
  <Container>
    <Header as='h1'>
      Login for My Media Library V2
    </Header>
    <p>
      This will be the login page.
    </p>
    <hr />
    <div>
      <Button as={Link} to="/movies" className="custom-button">
        View Movies
      </Button>
    </div>
  </Container>
)