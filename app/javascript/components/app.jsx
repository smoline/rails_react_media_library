import React, { Component } from "react"
// import Routes from "../routes/index"

import Navigation from "../components/navigation"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/home"
import Login from "../components/login"
import Signup from "../components/signup"
import Movies from "../components/movies"

// export default props => <>{Routes}</>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    fetch('http://localhost:3000/logged_in')
    .then(response => {
      return response.json()
    }).then(data => {
      console.log('logged_in: ', data)
      if (data.logged_in) {
        this.handleLogin(data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
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
            <Route exact path="/" render={props => (<Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
            <Route exact path="/login" render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
            <Route exact path="/signup" render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
            <Route exact path="/movies">
              <div>
                <Navigation />
                <Movies />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App