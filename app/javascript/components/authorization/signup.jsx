import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Grid, Button, Header, Divider, Form } from "semantic-ui-react"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: ""
    }
  }

  componentDidMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { firstName, lastName, email, password, password_confirmation } = this.state
    let user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    const token = document.getElementsByName("csrf-token")[0].content

    fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token
      },
      body: JSON.stringify(user)
    }).then(response => {
      return response.json()
    }).then(data => {
      if (data.status === "created") {
        this.props.handleLogin(data)
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
    this.props.history.push("/")
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }

  render() {
    const { firstName, lastName, email, password, password_confirmation } = this.state
    return (
      <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header textAlign="center" as="h1">Sign Up</Header>
          <Divider className="custom-divider" />
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Input
              label="First Name"
              placeholder="first name"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Last Name"
              placeholder="last name"
              name="lastName"
              value={lastName}
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
            <p>
              or <Link to='/login'>Login</Link>
            </p>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default Signup