import React, { Component } from "react"
import Routes from "../routes/index"
// import axios from 'axios'

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
    fetch('http://localhost:3000/logged_in',
    { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
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
        {Routes}
      </div>
    )
  }
}

export default App