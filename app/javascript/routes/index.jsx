import React from "react"
import { Route, Switch } from "react-router-dom"
import Movies from "../components/movies"
import Navigation from "../components/movies"

export default (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/movies" component={Movies} />
    </Switch>
  </div>
)