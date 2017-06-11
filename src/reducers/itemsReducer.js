import { fromJS } from 'immutable'

/**
 * ACTIONS & ACTIONS CREATORS
**/

// MODAL
const CLOSE_FORM = 'src/items/CLOSE_FORM'
const OPEN_FORM = 'src/items/OPEN_FORM'

export const closeForm = () => ({ type: CLOSE_FORM })
export const openForm = () => ({ type: OPEN_FORM })

// FIELDS
const SELECTED_MODULE = 'scr/items/SELECTED_MODULE'
const SET_FIELDS = 'src/items/SET_FIELDS'

export const selectedModule = (moduleId) => ({ type: SELECTED_MODULE, moduleId })
export const setItemFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })

// SAVE ITEM
export const SET_SAVED_ITEM = 'src/items/SET_SAVED_ITEM'
export const SET_SAVED_ITEM_LOADING = 'src/items/SET_SAVED_ITEM_LOADING'
export const SET_SAVED_ITEM_SUCCESS = 'src/items/SET_SAVED_ITEM_SUCCESS'
export const SET_SAVED_ITEM_FAIL = 'src/items/SET_SAVED_ITEM_FAIL'

export const setSavedItem = () => ({ type: SET_SAVED_ITEM })
export const setSavedItemLoading = () => ({ type: SET_SAVED_ITEM_LOADING })
export const setSavedItemSuccess = (item) => ({ type: SET_SAVED_ITEM_SUCCESS, item })
export const setSavedItemFail = (err) => ({ type: SET_SAVED_ITEM_FAIL, err })

// SHOW MODAL FORM FOR UPDATE
export const SHOW_MODAL_UPDATE_ITEM = 'src/items/SHOW_MODAL_UPDATE_ITEM'
export const showModalUpdateItem = (index, item) => ({ type: SHOW_MODAL_UPDATE_ITEM, index, item })

// EMPTY FIELDS
const RESET_STATE = 'src/items/RESET_STATE'
export const resetState = () => ({ type: RESET_STATE })

/**
 * REDUCER
**/

const initialState = fromJS({
  item: {
    moduleId: '',
    number: '',
    order: '',
    answer: '',
    recommend: '',
    value: ''
  },
  savedLoading: false,
  savedFail: null,
  openFormModal: false
})

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FORM:
      return state.set('openFormModal', true)
    case CLOSE_FORM:
      return state.set('openFormModal', false)
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case SELECTED_MODULE:
      return state.setIn(['item', 'moduleId'], action.moduleId)
    case SET_SAVED_ITEM_LOADING:
      return state.merge({
        savedLoading: true,
        savedFail: null
      })
    case SET_SAVED_ITEM_SUCCESS:
      return state.merge({
        item: action.item,
        savedLoading: false
      })
    case SET_SAVED_ITEM_FAIL:
      return state.merge({
        savedLoading: false,
        savedFail: action.err
      })
    case RESET_STATE:
      return state.merge(initialState)
    default:
      return state
  }
}

export default itemsReducer
