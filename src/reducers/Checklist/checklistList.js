import { fromJS, List } from 'immutable'

export const GO_TO_CHECKLIST = 'src/checklists/GO_TO_CHECKLIST'
export const GO_TO_ADD_NEW_CHECKLIST = 'src/checklists/GO_TO_ADD_NEW_CHECKLIST'

export const goToChecklist = () => ({ type: GO_TO_CHECKLIST })
export const goToAddNewChecklist = (id) => ({ type: GO_TO_ADD_NEW_CHECKLIST, id })

export const FETCH_CHECKLISTS = 'src/checklists/FETCH_CHECKLISTS'
export const FETCH_CHECKLISTS_LOADING = 'src/checklists/FETCH_CHECKLISTS_LOADING'
export const FETCH_CHECKLISTS_SUCCESS = 'src/checklists/FETCH_CHECKLISTS_SUCCESS'
export const FETCH_CHECKLISTS_FAIL = 'src/checklists/FETCH_CHECKLISTS_FAIL'

export const fetchChecklists = () => ({ type: FETCH_CHECKLISTS })
export const fetchChecklistsLoading = () => ({ type: FETCH_CHECKLISTS_LOADING })
export const fetchChecklistsSuccess = (checklists) => ({ type: FETCH_CHECKLISTS_SUCCESS, checklists })
export const fetchChecklistsFail = (err) => ({ type: FETCH_CHECKLISTS_FAIL, err })

const initialState = fromJS({
  checklists: [],
  loading: false,
  fail: null
})

const getChecklistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHECKLISTS_LOADING:
      return state.merge({
        loading: true,
        fail: null
      })
    case FETCH_CHECKLISTS_SUCCESS:
      return state.merge({
        loading: false,
        checklists: List.of(...action.checklists)
      })
    case FETCH_CHECKLISTS_FAIL:
      return state.merge({
        loading: false,
        fail: action.err
      })
    default:
      return state
  }
}

export default getChecklistsReducer
