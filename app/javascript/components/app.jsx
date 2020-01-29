import React, { Component } from "react"

import Navigation from "../components/navigation/navigation"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "../components/home"
import Login from "../components/authorization/login"
import Signup from "../components/authorization/signup"
import Movies from "./movies/movies"
import Movie from "./movies/movie"

const ProtectedRoute = ({ loggedInStatus, path, component: Component, handleLogout, ...props }) => (
  <Route exact path={path} render={(props) => (
    loggedInStatus.isLoggedIn === true
      ? <div>
          <Navigation {...props} handleLogout={handleLogout} loggedInStatus={loggedInStatus} />
          <Component {...props} />
        </div>
      : <Redirect to="/login" />
  )} />
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true,
      user: {}
    }
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    fetch("http://localhost:3000/logged_in")
    .then(response => {
      return response.json()
    }).then(data => {
      if (data.logged_in) {
        this.handleLogin(data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log("api errors: ", error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => (<Home {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
            <Route exact path="/login" render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
            <Route exact path="/signup" render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />

            <ProtectedRoute
              loggedInStatus={this.state}
              path="/movies/:id"
              component={Movie}
              handleLogout={this.handleLogout}
            />

            <ProtectedRoute
              loggedInStatus={this.state}
              path="/movies"
              component={Movies}
              handleLogout={this.handleLogout}
            />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App