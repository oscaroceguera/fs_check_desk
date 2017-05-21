import { fromJS, List } from 'immutable'

export const FETCH_MODULES = 'src/modules/FETCH_MODULES'
export const FETCH_MODULES_LOADING = 'src/modules/FETCH_MODULES_LOADING'
export const FETCH_MODULES_SUCCESS = 'src/modules/FETCH_MODULES_SUCCESS'
export const FETCH_MODULES_FAIL = 'src/modules/FETCH_MODULES_FAIL'

export const fetchModules = () => ({ type: FETCH_MODULES })
export const fetchModulesLoading = () => ({ type: FETCH_MODULES_LOADING })
export const fetchModulesSuccess = (modules) => ({ type: FETCH_MODULES_SUCCESS, modules })
export const fetchModulesFail = (err) => ({ type: FETCH_MODULES_FAIL, err })

const initialState = fromJS({
  modules: [],
  modulesLoading: false,
  modulesFail: null
})

function getModulesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_MODULES_LOADING:
      return state.merge({
        modulesLoading: true,
        modulesFail: null
      })
    case FETCH_MODULES_SUCCESS:
      return state.merge({
        modulesLoading: false,
        modules: List.of(...action.modules)
      })
    case FETCH_MODULES_FAIL:
      return state.merge({
        modulesLoading: false,
        modulesFail: action.err
      })
    default:
      return state
  }
}

export default getModulesReducer
