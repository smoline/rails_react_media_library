import React, { Component } from 'react'
import { Container, Button, Header, Divider, Form } from "semantic-ui-react"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
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
    const { username, email, password, password_confirmation } = this.state
    return (
      <Container>
        <Header as="h1">Sign Up</Header>
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
          <Form.Input
            label="Password Confirmation"
            placeholder="password confirmation"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <Button placeholder="submit" type="submit">
            Sign Up
          </Button>

        </Form>
      </Container>
    )
  }
}
export default Signup