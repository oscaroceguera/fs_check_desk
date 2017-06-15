import { fromJS } from 'immutable'

const SET_FIELDS = 'src/checklist/SET_FIELDS'
const RESET_FIELDS = 'src/checklist/RESET_FIELDS'

export const setFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const resetFields = () => ({ type: RESET_FIELDS })

const initialState = fromJS({
  checklist: {
    checklistType: '',
    companyName: '',
    country: '',
    state: '',
    town: '',
    street: '',
    number: '',
    neighborhood: '',
    zipcode: '',
    date: '',
    description: ''
  }
})

const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case RESET_FIELDS:
      return state.merge(initialState)
    default:
      return state
  }
}

export default checklistReducer
