import { fromJS, List } from 'immutable'

export const FETCH_ITEMS = 'src/item/FETCH_ITEMS'
export const FETCH_ITEMS_LOADING = 'src/item/FETCH_ITEMS_LOADING'
export const FETCH_ITEMS_SUCCESS = 'src/item/FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAIL = 'src/item/FETCH_ITEMS_FAIL'

export const fetchItems = () => ({ type: FETCH_ITEMS })
export const fetchItemsLoading = () => ({ type: FETCH_ITEMS_LOADING })
export const fetchItemsSuccess = (items) => ({ type: FETCH_ITEMS_SUCCESS, items })
export const fetchItemsFail = (err) => ({ type: FETCH_ITEMS_FAIL, err })

export const SET_DELETE_ITEM = 'src/item/SET_DELETE_ITEM'
export const SET_DELETE_ITEM_SUCCESS = 'src/item/SET_DELETE_ITEM_SUCCESS'
export const SET_DELETE_ITEM_FAIL = 'src/item/SET_DELETE_ITEM_FAIL'

export const setDeleteItem = (id, index) => ({ type: SET_DELETE_ITEM, id, index })
export const setDeleteItemSuccess = (index) => ({ type: SET_DELETE_ITEM_SUCCESS, index })
export const setDeleteItemFail = (err) => ({ type: SET_DELETE_ITEM_FAIL, err })

export const SET_UPTATE_ITEM = 'src/items/SET_UPTATE_ITEM'

export const setUpdateItem = () => ({ type: SET_UPTATE_ITEM })

const initialState = fromJS({
  items: [],
  itemsLoading: false,
  itemsFail: null,
  msgRemoveFail: null
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
    case SET_DELETE_ITEM_SUCCESS:
      return state
        .deleteIn(['items', action.index])
        .set('itemsLoading', false)
    case SET_DELETE_ITEM_FAIL:
      return state.merge({
        msgRemoveFail: action.err,
        itemsLoading: false
      })
    default:
      return state
  }
}

export default getItemsReducer
