import { fromJS } from 'immutable'
import axios from 'axios'

// Actions
const SET_FIELDS = 'src/signup/SET_FIELDS'
const SIGNUP_LOADING = 'src/signup/SIGNUP_LOADING'
const SIGNUP_SUCCESS = 'src/signup/SIGNUP_SUCCESS'
const SIGNUP_FAIL = 'src/signup/SIGNUP_FAIL'

// Actions creators
export function setFields (section, item, value) {
  return {
    type: SET_FIELDS,
    section,
    item,
    value
  }
}

function singupLoading () {
  return {
    type: SIGNUP_LOADING
  }
}

function signupSuccess () {
  return {
    type: SIGNUP_SUCCESS
  }
}

function signupFail (error) {
  return {
    type: SIGNUP_FAIL,
    error
  }
}

export function signupFanout () {
  return (dispatch, getState) => {
    const data = getState().signupReducer.toJS().fields
    const dataPost = {
      firstName: data.firstName,
      lastName: data.secondName,
      email: data.email,
      password: data.password
    }
    dispatch(singupLoading())
    axios.post('http://localhost:8000/api/auth/register', dataPost)
      .then(function (register) {
        dispatch(signupSuccess())
      })
      .catch(function (err) {
        dispatch(signupFail(err))
      })
  }
}

// Reducer
const initialState = fromJS({
  savedLoading: false,
  savedFail: null,
  savedSucces: false,
  fields : {
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confPassword: ''
  }
})

function signupReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case SIGNUP_LOADING:
      return state.set('savedLoading', true)
    case SIGNUP_FAIL:
      return state.merge({
        savedLoading: false,
        savedFail: action.error,
      })
    case SIGNUP_SUCCESS:
      return state.merge({
        savedLoading: false,
        savedFail: null,
        savedSucces: true
      })
    default:
      return state
  }
}

export default signupReducer
