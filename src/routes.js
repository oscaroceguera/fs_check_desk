
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App/App';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import HomeContainer from './containers/Home/HomeContainer'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer}>
          <Route path="signup"  component={Signup} />
          <Route path="login"  component={Login} />
        </Route>
      </Route>
    </Router>
  )
}
