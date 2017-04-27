import { fromJS } from 'immutable'

const CLOSE_SNACKBAR = 'src/snackbar/CLOSE_SNACKBAR'
const OPEN_SNACKBAR = 'src/snackbar/OPEN_SNACKBAR'

export const closeSnackbar = () => ({ type: CLOSE_SNACKBAR })
export const openSnackbar = () => ({ type: OPEN_SNACKBAR })

const initialState = fromJS({
  open: true
})

function snackbarReducer (state = initialState, action) {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return state.set('open', false)
    case OPEN_SNACKBAR:
      return state.set('open', true)
    default:
      return state
  }
}

export default snackbarReducer
