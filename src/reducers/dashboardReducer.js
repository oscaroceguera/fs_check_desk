import { fromJS } from 'immutable'

const DRAWER_MENU = 'src/snackbar/DRAWER_MENU'
const DRAWER_MENU_CLOSE = 'src/snackbar/DRAWER_MENU_CLOSE'

export const drawerMenu = () => ({ type: DRAWER_MENU })
export const drawerMenuClose = () => ({ type: DRAWER_MENU_CLOSE })

const initialState = fromJS({
  open: false
})

function dashboardReducer (state = initialState, action) {
  switch (action.type) {
    case DRAWER_MENU:
      return state.set('open', !state.get('open'))
    case DRAWER_MENU_CLOSE:
      return state.set('open', false)
    default:
      return state
  }
}

export default dashboardReducer
