import { fromJS } from 'immutable'

// Actions
const SET_FIELDS = 'src/login/SET_FIELDS'
export const LOGIN_USER = 'src/login/LOGIN_USER'
export const LOGIN_LOADING = 'src/login/LOGIN_LOADING'
export const AUTH_USER = 'src/login/AUTH_USER'
export const AUTH_USER_FAIL = 'src/login/AUTH_USER_FAIL'
export const LOGOUT_USER = 'src/login/LOGOUT_USER'
export const UNAUTH_USER = 'src/login/UNAUTH_USER'
export const RESET_ERROR = 'src/login/RESET_ERROR'

// Actions creators
export const setFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const loginUser = () => ({ type: LOGIN_USER })
export const loginLoading = () => ({ type: LOGIN_LOADING })
export const logoutUser = () => ({ type: LOGOUT_USER })
export const authUser = () => ({ type: AUTH_USER })
export const authUserFail = (err) => ({ type: AUTH_USER_FAIL, err })
export const unAuthUser = () => ({ type: UNAUTH_USER })
export const resetError = () => ({ type: RESET_ERROR })

// Reducer
const initialState = fromJS({
  loading: false,
  error: null,
  profile: {},
  authenticated: false,
  fields: {
    email: '',
    password: ''
  }
})

function authReducer (state = initialState, action) {
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
      return state
  }
}

export default authReducer
