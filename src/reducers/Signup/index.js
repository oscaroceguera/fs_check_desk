import { fromJS } from 'immutable'

// Actions
const SET_FIELDS = 'src/signup/SET_FIELDS'
export const SET_SIGNUP = 'src/signup/SET_SIGNUP'
const SIGNUP_LOADING = 'src/signup/SIGNUP_LOADING'
const SIGNUP_SUCCESS = 'src/signup/SIGNUP_SUCCESS'
const SIGNUP_FAIL = 'src/signup/SIGNUP_FAIL'
const RESET_FORM = 'src/signup/RESET_FORM'

// Actions creators
export const setFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const setSignup = () => ({ type: SET_SIGNUP })
export const singupLoading = () => ({ type: SIGNUP_LOADING })
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS })
export const signupFail = (error) => ({ type: SIGNUP_FAIL, error })
export const resetForm = () => ({ type: RESET_FORM })

// Reducer
const initialState = fromJS({
  savedLoading: false,
  savedFail: null,
  savedSucces: false,
  message: '',
  fields: {
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
      return state.merge({
        savedLoading: true,
        savedSucces: false
      })
    case SIGNUP_FAIL:
      return state.merge({
        savedLoading: false,
        savedFail: action.error.response.data.error
      })
    case SIGNUP_SUCCESS:
      return state.merge({
        savedLoading: false,
        savedFail: null,
        savedSucces: true,
        message: 'Registro Exitoso!'
      })
    case RESET_FORM:
      return state.merge(initialState)
    default:
      return state
  }
}

export default signupReducer
