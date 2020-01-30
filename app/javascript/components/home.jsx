import React from "react"
import { Link } from "react-router-dom"
import { Container, Button, Header, Divider } from "semantic-ui-react"

const Home = (props) => {

  const handleClick = () => {
    fetch('/logout', {
      method: 'delete'
    }).then(response => {
        props.handleLogout()
        props.history.push("/")
    })
    .catch(error => console.log(error))
  }

  return (
    <Container>
      <Header as="h1">
        My Media Library
      </Header>
      <Divider className="custom-divider" />
      <div>
        {
          props.loggedInStatus
        ? <div>
            <div>
              <Button className="custom-button" as={Link} to="/logout" onClick={handleClick}>
                Log Out
              </Button>
            </div>
            <br></br>
            <div>
              <Button className="custom-button" as={Link} to="/movies">
                Movies
              </Button>
            </div>
          </div>

        : <div>
            <div>
              <Button className="custom-button" as={Link} to="/login">
                Log In
              </Button>
            </div>
            <br></br>
            <div>
              <Button className="custom-button" as={Link} to="/signup">
                Sign Up
              </Button>
            </div>
          </div>
        }
      </div>
    </Container>
  )
}

export default Home