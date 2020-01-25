import React from 'react'
import { render } from 'react-dom'
import App from '../components/app'
import { BrowserRouter, Route } from "react-router-dom"


document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
