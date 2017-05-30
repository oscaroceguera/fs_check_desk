import { select, takeEvery } from 'redux-saga/effects'
import { getItemsBySchemaId } from '../../helpers/api'
import { FETCH_ITEMS, fetchItemsLoading, fetchItemsSuccess, fetchItemsFail } from '../../reducers/getItemsReducer'
import { fetchApiSaga } from '../commons/genericSagas'

function* fetchItems() {
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  yield* fetchApiSaga(getItemsBySchemaId, [schemaId, localStorage.getItem('token')], fetchItemsLoading, fetchItemsSuccess, fetchItemsFail)
}

function* defaultSaga () {
  yield [
    takeEvery(FETCH_ITEMS, fetchItems)
  ]
}

export const sagas =  [
  defaultSaga
]
