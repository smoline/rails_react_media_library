import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Grid, Button, Header, Divider, Form } from "semantic-ui-react"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
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

    const { email, password } = this.state
    let user = {
      email: email,
      password: password
    }

    const token = document.getElementsByName("csrf-token")[0].content

    fetch("/login", {
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
      if (data.logged_in) {
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
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    console.log(this.props)
    const { email, password } = this.state
    return (
      <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1">Log In</Header>
          <Divider />
          <Form inverted onSubmit={this.handleSubmit}>
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
            <Button inverted placeholder="submit" type="submit">
              Log In
            </Button>
            <p>
              or <Link to="/signup">sign up</Link>
            </p>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default Login