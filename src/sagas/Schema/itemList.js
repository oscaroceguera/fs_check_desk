import { select, takeEvery } from 'redux-saga/effects'
import { getItemsBySchemaId, deleteItemById } from '../../helpers/api'
import * as GIR from '../../reducers/getItemsReducer'
import { fetchApiSaga, deleteApiSaga } from '../commons/genericSagas'

function* fetchItems () {
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  yield * fetchApiSaga(
    getItemsBySchemaId,
    [schemaId, localStorage.getItem('token')],
    GIR.fetchItemsLoading,
    GIR.fetchItemsSuccess,
    GIR.fetchItemsFail
  )
}

function* removeItem (action) {
  const { id, index } = action
  yield * deleteApiSaga(
    deleteItemById,
    [id, localStorage.getItem('token')],
    index,
    GIR.fetchItemsLoading,
    GIR.setDeleteItemSuccess,
    GIR.setDeleteItemFail
  )
}

function* defaultSaga () {
  yield [
    takeEvery(GIR.FETCH_ITEMS, fetchItems),
    takeEvery(GIR.SET_DELETE_ITEM, removeItem)
  ]
}

export const sagas = [
  defaultSaga
]
