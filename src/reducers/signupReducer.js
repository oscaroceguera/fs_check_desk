import { fromJS } from 'immutable'

// Actions
const SET_FIELDS = 'src/signup/SET_FIELDS'

// Actions creators
export function setFields (section, item, value) {
  return {
    type: SET_FIELDS,
    section,
    item,
    value
  }
}

// Reducer
const initialState = fromJS({
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
    default:
      return state
  }
}

export default signupReducer
