
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App/App';
import SignupContainer from './containers/Signup/SignupContainer';
import LoginContainer from './containers/Login/LoginContainer';
import HomeContainer from './containers/Home/HomeContainer'
import RequiredAuth from './containers/Auth/RequiredAuth'
import DashboardContainer from './containers/Dashboard/DashboardContainer'
import SchemasContainer from './containers/Schemas/SchemasContainer'
import SchemaFormContainer from './containers/Schemas/SchemaFormContainer'
import ChecklistsContainer from './containers/Checklists/ChecklistsContainer'
import SchedulesContainer from './containers/Schedules/SchedulesContainer'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer}>
          <Route path="signup" component={SignupContainer} />
          <Route path="login" component={LoginContainer} />
        </Route>
      </Route>
      <Route path="dashboard" component={RequiredAuth(DashboardContainer)}>
        <IndexRoute component={SchemasContainer} />
        <Route path="schemas" component={SchemasContainer} />
        <Route path="schemas/new" component={SchemaFormContainer} />
        <Route path="checklists" component={ChecklistsContainer} />
        <Route path="schedules" component={SchedulesContainer} />
      </Route>
    </Router>
  )
}
