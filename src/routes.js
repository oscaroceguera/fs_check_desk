import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App/App'
import SignupContainer from './containers/Signup/SignupContainer'
import LoginContainer from './containers/Login/LoginContainer'
import HomeContainer from './containers/Home/HomeContainer'
import RequiredAuth from './containers/Auth/RequiredAuth'
import DashboardContainer from './containers/Dashboard/DashboardContainer'
import SchemasContainer from './containers/Schemas/SchemasContainer'
import SchemaAdminContainer from './containers/Schemas/SchemaAdminContainer'
import ChecklistsContainer from './containers/Checklists/List/ChecklistsContainer'
import ChecklistAdminContainer from './containers/Checklists/Single/ChecklistAdminContainer'

// TODO: Crear UI para esta ruta
const My404Component = () => <h1>{'ESTA RUTA NO EXISTE!'}</h1>

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path='home' component={HomeContainer}>
          <Route path='signup' component={SignupContainer} />
          <Route path='login' component={LoginContainer} />
        </Route>
      </Route>
      <Route path='dashboard' component={RequiredAuth(DashboardContainer)}>
        <IndexRoute component={RequiredAuth(SchemasContainer)} />
        <Route path='schemas' component={RequiredAuth(SchemasContainer)} />
        <Route path='schemas/new' component={RequiredAuth(SchemaAdminContainer)} />
        <Route path='schemas/new/:schemaId' component={RequiredAuth(SchemaAdminContainer)} />
        <Route path='checklists' component={RequiredAuth(ChecklistsContainer)} />
        <Route path='checklists/new' component={RequiredAuth(ChecklistAdminContainer)} />
        <Route path='checklists/new/:checklistId' component={RequiredAuth(ChecklistAdminContainer)} />
      </Route>
      <Route path='*' component={My404Component} />
    </Router>
  )
}
