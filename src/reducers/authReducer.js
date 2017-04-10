// Actions

const DEFAULT = 'default'

export function defaultAction() {
  return {
    type: DEFAULT
  }
}

const initialState = {
  inital: 0
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
        return state;
    default:
      return state;
  }
}

export default authReducer
