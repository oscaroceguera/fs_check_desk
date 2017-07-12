import { fromJS } from 'immutable'

// FIELDS
const SET_FIELDS = 'src/checklist/SET_FIELDS'
const RESET_FIELDS = 'src/checklist/RESET_FIELDS'

export const setFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const resetFields = () => ({ type: RESET_FIELDS })

// SELECTED SCHEMA
const SELECTED_SCHEMA = 'src/checklist/SELECTED_SCHEMA'

export const selectedSchema = (schemaType) => ({ type: SELECTED_SCHEMA, schemaType })

// LOADING
const SET_LOADING = 'src/checklist/SET_LOADING'

export const setLoading = () => ({ type: SET_LOADING })

// SET SAVED CHECKLIST
export const SET_SAVED_CHECKLIST = 'src/checklist/SET_SAVED_CHECKLIST'
const SET_SAVED_CHECKLIST_SUCCESS = 'src/checklist/SET_SAVED_CHECKLIST_SUCCESS'
const SET_SAVED_CHECKLIST_FAIL = 'src/checklist/SET_SAVED_CHECKLIST_FAIL'

export const setSavedChecklist = () => ({ type: SET_SAVED_CHECKLIST })
export const setSavedChecklistSuccess = (checklist) => ({ type: SET_SAVED_CHECKLIST_SUCCESS, checklist })
export const setSavedChecklistFail = (err) => ({ type: SET_SAVED_CHECKLIST_FAIL, err })

// UPDATE CHECKLIST
export const SET_UPDATE_CHECKLIST = 'src/checklist/SET_UPDATE_CHECKLIST'
const SET_UPDATE_CHECKLIST_SUCCESS = 'src/checklist/SET_UPDATE_SCHEMA_SUCCESS'

export const setUpdateChecklist = () => ({ type: SET_UPDATE_CHECKLIST })
export const setUpdateChecklistSuccess = (checklist) => ({ type: SET_UPDATE_CHECKLIST_SUCCESS, checklist })

const initialState = fromJS({
  checklist: {
    schemaType: '',
    companyName: '',
    country: '',
    state: '',
    town: '',
    street: '',
    number: '',
    neighborhood: '',
    zipcode: '',
    date: new Date(),
    description: '',
    items: []
  },
  loading: false,
  error: null
})

const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case RESET_FIELDS:
      return state.merge(initialState)
    case SELECTED_SCHEMA:
      return state.setIn(['checklist', 'schemaType'], action.schemaType)
    case SET_LOADING:
      return state.set('loading', true)
    case SET_UPDATE_CHECKLIST_SUCCESS:
    case SET_SAVED_CHECKLIST_SUCCESS:
      return state.merge({
        checklist: action.checklist,
        loading: false
      })
    case SET_SAVED_CHECKLIST_FAIL:
      return state.merge({
        loading: false,
        error: action.err
      })
    default:
      return state
  }
}

export default checklistReducer
