
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './containers/App/App';
import HomeContainer from './containers/Home/HomeContainer'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer} />
      </Route>
    </Router>
  )
}
