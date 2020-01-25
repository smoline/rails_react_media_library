import React from "react"
import { Link } from "react-router-dom"
import { Container, Button, Header, Divider } from "semantic-ui-react"

const Home = () => {
  return (
    <Container>
      <Header as="h1">
        My Media Library
      </Header>
      <Divider className="custom-divider" />
      <div>
        <Button as={Link} to="/login" inverted className="custom-button">
          Log In
        </Button>
      </div>
      <br></br>
      <div>
        <Button as={Link} to="/signup" inverted className="custom-button">
          Sign Up
        </Button>
      </div>
    </Container>
  )
}

export default Home