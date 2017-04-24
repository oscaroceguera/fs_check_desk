import { fromJS } from 'immutable'
import axios from 'axios'
import { browserHistory } from 'react-router'

// Actions
const SET_FIELDS = 'src/login/SET_FIELDS'
const LOGIN_LOADING = 'src/login/LOGIN_LOADING'
export const AUTH_USER = 'src/login/AUTH_USER'
const AUTH_USER_FAIL = 'src/login/AUTH_USER_FAIL'
const UNAUTH_USER = 'src/login/UNAUTH_USER'

// Actions creators
export function setFields (section, item, value) {
  return {
    type: SET_FIELDS,
    section,
    item,
    value
  }
}

function loginLoading () {
  return {
    type: LOGIN_LOADING
  }
}

function authUser () {
  return {
    type: AUTH_USER
  }
}

function authUserFail (err) {
  return {
    type: AUTH_USER_FAIL,
    err
  }
}

function unAuthUser () {
  return {
    type: UNAUTH_USER
  }
}

export function loginUser () {
  return (dispatch, getState) => {
    const data = getState().authReducer.toJS().fields
    dispatch(loginLoading())
    axios.post('http://localhost:8000/api/auth/login', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        dispatch(authUser())
        browserHistory.push('/dashboard')
      })
      .catch((err) => {
        dispatch(authUserFail(err))
      })
  }
}

export function logoutUser () {
  return (dispatch) => {
    dispatch(unAuthUser())
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    browserHistory.push('/home')
  }
}

// Reducer
const initialState = fromJS({
  login: false,
  error: null,
  profile: {},
  message: '',
  authenticated: false,
  fields : {
    email: '',
    password: ''
  }
})

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case LOGIN_LOADING:
      return state.set('login', true)
    case AUTH_USER:
      return state.merge({
        login: false,
        error: null,
        profile: JSON.parse(localStorage.getItem('user')),
        authenticated: true
      })
    case AUTH_USER_FAIL:
      return state.merge({
        login: false,
        error: action.err
      })
    case UNAUTH_USER:
      return state.set('authenticated', false)
    default:
      return state;
  }
}

export default authReducer
