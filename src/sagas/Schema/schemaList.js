import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_SCHEMAS,
  fetchSchemasLoading,
  fetchSchemaSuccess,
  fetchSchemasFail
} from '../../reducers/getSchemasReducer'

import { getSchemas } from '../../helpers/api'


function* fetchSchemas() {
  yield put(fetchSchemasLoading())
  yield delay(1000)
  try {
    const schemas = yield call(getSchemas, localStorage.getItem('token'))
    yield put(fetchSchemaSuccess(schemas))
  } catch (err) {
    yield put(fetchSchemasFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(FETCH_SCHEMAS, fetchSchemas)
  ]
}

export const sagas =  [
  defaultSaga
]
