import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getItemsBySchemaId } from '../../helpers/api'
import { FETCH_ITEMS, fetchItemsLoading, fetchItemsSuccess, fetchItemsFail } from '../../reducers/getItemsReducer'

function* fetchItems() {
  yield put(fetchItemsLoading())
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  try {
    const items = yield call(getItemsBySchemaId, schemaId, localStorage.getItem('token'))
    yield put(fetchItemsSuccess(items))
  } catch (err) {
    yield put(fetchItemsFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeEvery(FETCH_ITEMS, fetchItems)
  ]
}

export const sagas =  [
  defaultSaga
]
