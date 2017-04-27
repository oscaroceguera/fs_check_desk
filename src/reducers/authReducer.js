import { fromJS } from 'immutable'
import axios from 'axios'
import { browserHistory } from 'react-router'

// Actions
const SET_FIELDS = 'src/login/SET_FIELDS'
const LOGIN_LOADING = 'src/login/LOGIN_LOADING'
export const AUTH_USER = 'src/login/AUTH_USER'
const AUTH_USER_FAIL = 'src/login/AUTH_USER_FAIL'
const UNAUTH_USER = 'src/login/UNAUTH_USER'
const RESET_ERROR = 'src/login/RESET_ERROR'

// Actions creators
export const setFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
const loginLoading = () => ({ type: LOGIN_LOADING })
const authUser = () => ({ type: AUTH_USER })
const authUserFail = (err) => ({ type: AUTH_USER_FAIL, err })
const unAuthUser = () => ({ type: UNAUTH_USER })
const resetError = () => ({ type: RESET_ERROR })

export const loginUser = () => {
  return (dispatch, getState) => {
    const data = getState().authReducer.toJS().fields
    dispatch(resetError())
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

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(unAuthUser())
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    browserHistory.push('/')
  }
}

// Reducer
const initialState = fromJS({
  loading: false,
  error: null,
  profile: {},
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
      return state.set('loading', true)
    case AUTH_USER:
      return state.merge({
        loading: false,
        error: null,
        profile: JSON.parse(localStorage.getItem('user')),
        authenticated: true
      })
    case AUTH_USER_FAIL:
      return state.merge({
        loading: false,
        error: action.err.response.data
      })
    case UNAUTH_USER:
      return state.set('authenticated', false)
    case RESET_ERROR:
      return state.set('error', null)
    default:
      return state;
  }
}

export default authReducer
