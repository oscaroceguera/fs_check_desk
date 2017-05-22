import { fromJS, List } from 'immutable'

export const FETCH_ITEMS = 'src/item/FETCH_ITEMS'
export const FETCH_ITEMS_LOADING = 'src/item/FETCH_ITEMS_LOADING'
export const FETCH_ITEMS_SUCCESS = 'src/item/FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAIL = 'src/item/FETCH_ITEMS_FAIL'

export const fetchItems = () => ({ type: FETCH_ITEMS })
export const fetchItemsLoading = () => ({ type: FETCH_ITEMS_LOADING })
export const fetchItemsSuccess = (items) => ({ type: FETCH_ITEMS_SUCCESS, items })
export const fetchItemsFail = (err) => ({ type: FETCH_ITEMS_FAIL, err })

const initialState = fromJS({
  items: [],
  itemsLoading: false,
  itemsFail: null
})

function getItemsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_LOADING:
      return state.merge({
        itemsLoading: true,
        itemsFail: null
      })
    case FETCH_ITEMS_SUCCESS:
      return state.merge({
        itemsLoading: false,
        items: List.of(...action.items)
      })
    case FETCH_ITEMS_FAIL:
      return state.merge({
        itemsLoading: false,
        itemsFail: action.err
      })
    default:
      return state
  }
}

export default getItemsReducer
