import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Header, Divider, Form } from "semantic-ui-react"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { username, email, password } = this.state
    return (
      <Container>
        <Header as="h1">Log In</Header>
        <Divider />
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Input
            label="User Name"
            placeholder="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button placeholder="submit" type="submit">
            Log In
          </Button>
          <p>
            or <Link to='/signup'>sign up</Link>
          </p>
        </Form>
      </Container>
    )
  }
}
export default Login