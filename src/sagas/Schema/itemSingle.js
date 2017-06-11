import { call, put, select, takeLatest } from 'redux-saga/effects'
import * as IR from '../../reducers/itemsReducer'
import * as GIR from '../../reducers/getItemsReducer'
import { postItem, putItem } from '../../helpers/api'

const getState = (reducer, item) => select(state => state[reducer].toJS()[item])
const getStateTwoItem = (reducer, item, otherItem) => select(state => state[reducer].toJS()[item][otherItem])

function* savedItem () {
  yield put(IR.setSavedItemLoading())
  const [schemaId, data] = yield ([
    getStateTwoItem('schemasReducer', 'schema', 'id'),
    getState('itemsReducer', 'item')
  ])
  data.schemaId = schemaId
  try {
    const item = yield call(postItem, data, localStorage.getItem('token'))
    yield put(IR.setSavedItemSuccess(item))
    yield put(IR.resetState())
    yield put(GIR.fetchItems())
  } catch (err) {
    yield put(IR.setSavedItemFail(err))
  }
}

function* modalUpdateItem (action) {
  yield put(IR.setSavedItemSuccess(action.item))
  yield put(IR.openForm())
}

function* updateItem () {
  yield put(GIR.fetchItemsLoading())
  const item = yield (getState('itemsReducer', 'item'))
  try {
    yield call(putItem, item.id, item, localStorage.getItem('token'))
    yield put(IR.closeForm())
    yield put(IR.resetState())
    yield put(GIR.fetchItems())
  } catch (err) {
    yield put(IR.setSavedItemFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(IR.SET_SAVED_ITEM, savedItem),
    takeLatest(IR.SHOW_MODAL_UPDATE_ITEM, modalUpdateItem),
    takeLatest(GIR.SET_UPTATE_ITEM, updateItem)
  ]
}

export const sagas = [
  defaultSaga
]
