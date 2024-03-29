import { fromJS } from 'immutable'

export const SET_CLOSE_MODAL = 'src/modal/SET_CLOSE_MODAL'
const CLOSE_MODAL = 'src/modal/CLOSE_MODAL'
const OPEN_MODAL = 'src/modal/OPEN_MODAL'

export const setCloseModal = () => ({ type: SET_CLOSE_MODAL })
export const closeModal = () => ({ type: CLOSE_MODAL })
export const openModal = () => ({ type: OPEN_MODAL })

const initialState = fromJS({
  open: false
})

function modalReducer (state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return state.set('open', false)
    case OPEN_MODAL:
      return state.set('open', true)
    default:
      return state
  }
}

export default modalReducer
