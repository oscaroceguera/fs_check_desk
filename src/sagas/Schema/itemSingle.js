import { call, put, select, takeLatest } from 'redux-saga/effects'
import * as itemsReducer from '../../reducers/itemsReducer'
import * as getItemsReducer from '../../reducers/getItemsReducer'
import { postItem, putItem } from '../../helpers/api'

// TODO: REFACTOR

const getState = (reducer, item) => select(state => state[reducer].toJS()[item])
const getStateTwoItem = (reducer, item, otherItem) => select(state => state[reducer].toJS()[item][otherItem])

function* savedItem () {
  yield put(itemsReducer.setSavedItemLoading())
  const [schemaId, data] = yield ([
    getStateTwoItem('schemasReducer', 'schema', 'id'),
    getState('itemsReducer', 'item')
  ])
  data.schemaId = schemaId
  try {
    const item = yield call(postItem, data, localStorage.getItem('token'))
    yield put(itemsReducer.setSavedItemSuccess(item))
    yield put(itemsReducer.resetState())
    yield put(getItemsReducer.fetchItems())
  } catch (err) {
    yield put(itemsReducer.setSavedItemFail(err))
  }
}

function* modalUpdateItem (action) {
  yield put(itemsReducer.setSavedItemSuccess(action.item))
  yield put(itemsReducer.openForm())
}

function* updateItem () {
  yield put(getItemsReducer.fetchItemsLoading())
  const item = yield (getState('itemsReducer', 'item'))
  try {
    yield call(putItem, item.id, item, localStorage.getItem('token'))
    yield put(itemsReducer.closeForm())
    yield put(itemsReducer.resetState())
    yield put(getItemsReducer.fetchItems())
  } catch (err) {
    yield put(itemsReducer.setSavedItemFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(itemsReducer.SET_SAVED_ITEM, savedItem),
    takeLatest(itemsReducer.SHOW_MODAL_UPDATE_ITEM, modalUpdateItem),
    takeLatest(getItemsReducer.SET_UPTATE_ITEM, updateItem)
  ]
}

export const sagas = [
  defaultSaga
]
