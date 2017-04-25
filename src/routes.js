
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App/App';
import SignupContainer from './containers/Signup/SignupContainer';
import LoginContainer from './containers/Login/LoginContainer';
import HomeContainer from './containers/Home/HomeContainer'
import RequiredAuth from './containers/Auth/RequiredAuth'
import DashboardContainer from './containers/Dashboard/DashboardContainer'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer}>
          <Route path="signup"  component={SignupContainer} />
          <Route path="login"  component={LoginContainer} />
        </Route>
      </Route>
      <Route path="dashboard" component={RequiredAuth(DashboardContainer)} />
    </Router>
  )
}
