import { fromJS } from 'immutable'

const SET_FIELDS = 'src/modules/SET_FIELDS'
const RESET_FIELDS = 'src/modules/RESET_FIELDS'

export const SET_SAVED_MODULE = 'src/modules/SET_SAVED_MODULE'
export const SET_SAVED_MODULE_LOADING = 'src/modules/SET_SAVED_MODULE_LOADING'
export const SET_SAVED_MODULE_SUCCESS = 'src/modules/SET_SAVED_MODULE_SUCCESS'
export const SET_SAVED_MODULE_FAIL = 'src/modules/SET_SAVED_MODULE_FAIL'

export const setModuleFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const resetFields = () => ({ type: RESET_FIELDS })
export const setSavedModule = () => ({ type: SET_SAVED_MODULE })
export const setSavedModuleLoading = () => ({ type: SET_SAVED_MODULE_LOADING })
export const setSavedModuleSuccess = (module) => ({ type: SET_SAVED_MODULE_SUCCESS, module })
export const setSavedModuleFail = (err) => ({ type: SET_SAVED_MODULE_FAIL, err })

const initialState = fromJS({
  module: {
    name: '',
    number: '',
    order: null
  },
  savedLoading: false,
  savedFail: null
})

function modulesReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case RESET_FIELDS:
      return state.merge(initialState)
    case SET_SAVED_MODULE_LOADING:
      return state.merge({
        savedLoading: true,
        savedFail: null
      })
    case SET_SAVED_MODULE_SUCCESS:
      return state.merge({
        module: action.module,
        savedLoading: false,
      })
    case SET_SAVED_MODULE_FAIL:
      return state.merge({
        savedLoading: false,
        savedFail: action.err
      })
    default:
      return state
  }
}

export default modulesReducer
