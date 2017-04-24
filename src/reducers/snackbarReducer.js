import { fromJS } from 'immutable'

const CLOSE_SNACKBAR = 'src/snackbar/CLOSE_SNACKBAR'

export function closeSnackbar () {
  return {
    type: CLOSE_SNACKBAR
  }
}

const initialState = fromJS({
  open: true
})

function snackbarReducer (state = initialState, action) {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return state.set('open', false)
    default:
      return state
  }
}

export default snackbarReducer
