import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { AUTH_USER } from './reducers/authReducer'
import { browserHistory } from 'react-router'

import createSagaMiddleware from 'redux-saga'

import * as reducers from './reducers'
import rootSaga from './sagas'

import getRoutes from './routes'

import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

rootSaga.forEach(saga => sagaMiddleware.run(saga))

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {getRoutes(history)}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// TODO: PASAR TODOS LOS COMPONENTES A UN index
// TODO: IMPORTAR COMPONENTES DE SU index
// TODO: PASAR TODOS LOS CONTAINERS A UN INDEX
// TODO: IMPORTAR LOS COMPONENTES DE A SU INDEX
