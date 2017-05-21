import { fromJS } from 'immutable'

const SELECTED_MODULE = 'scr/items/SELECTED_MODULE'
const SET_FIELDS = 'src/items/SET_FIELDS'

export const selectedModule = (moduleId) => ({ type: SELECTED_MODULE, moduleId })
export const setItemFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })

const initialState = fromJS({
  item: {
    moduleId: '',
    number: '',
    order: '',
    answer: '',
    recommend: '',
    value: ''
  }
})

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case SELECTED_MODULE:
      return state.setIn(['item', 'moduleId'], action.moduleId)
    default:
      return state
  }
}

export default itemsReducer
