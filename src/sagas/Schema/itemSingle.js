import { call, put, takeLatest } from 'redux-saga/effects'
import * as IR from '../../reducers/Item/itemForm'
import * as GIR from '../../reducers/Item/itemList'
import { postItem, putItem } from '../../helpers/api'
import { getSimpleState, getStateWithSecondItem } from '../commons/genericSelect'

function* savedItem () {
  yield put(IR.setSavedItemLoading())
  const [schemaId, data] = yield ([getStateWithSecondItem('schemasReducer', 'schema', 'id'), getSimpleState('itemsReducer', 'item')])
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
  const item = yield (getSimpleState('itemsReducer', 'item'))
  try {
    yield call(putItem, item.id, item, localStorage.getItem('token'))
    yield put(IR.closeForm())
    yield put(IR.resetState())
    yield put(GIR.fetchItems())
  } catch (err) {
    yield put(IR.setSavedItemFail(err))
  }
}

function* cancelModal () {
  yield put(IR.resetState())
  yield put(IR.closeForm())
}

function* defaultSaga () {
  yield [
    takeLatest(IR.SET_SAVED_ITEM, savedItem),
    takeLatest(IR.SHOW_MODAL_UPDATE_ITEM, modalUpdateItem),
    takeLatest(GIR.SET_UPTATE_ITEM, updateItem),
    takeLatest(IR.SET_CLOSE_MODAL, cancelModal)
  ]
}

export const sagas = [
  defaultSaga
]
