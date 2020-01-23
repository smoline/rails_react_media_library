import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/home"
import Login from "../components/login"
import Signup from "../components/signup"
import Movies from "../components/movies"

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/movies" component={Movies} />
    </Switch>
  </BrowserRouter>
)