import { select, takeEvery } from 'redux-saga/effects'
import { getItemsBySchemaId, deleteItemById } from '../../helpers/api'
import {
  FETCH_ITEMS, SET_DELETE_ITEM,
  fetchItemsLoading, fetchItemsSuccess, fetchItemsFail,
  setDeleteItemSuccess, setDeleteItemFail
} from '../../reducers/getItemsReducer'
import { fetchApiSaga, deleteApiSaga } from '../commons/genericSagas'

function* fetchItems () {
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  yield* fetchApiSaga(getItemsBySchemaId, [schemaId, localStorage.getItem('token')], fetchItemsLoading, fetchItemsSuccess, fetchItemsFail)
}

function* removeItem (action) {
  const { id, index } = action
  yield* deleteApiSaga(deleteItemById, [id, localStorage.getItem('token')], index, fetchItemsLoading, setDeleteItemSuccess, setDeleteItemFail)
}

function* defaultSaga () {
  yield [
    takeEvery(FETCH_ITEMS, fetchItems),
    takeEvery(SET_DELETE_ITEM, removeItem)
  ]
}

export const sagas = [
  defaultSaga
]
