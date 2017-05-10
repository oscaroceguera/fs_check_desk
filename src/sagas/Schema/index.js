import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { FETCH_SCHEMAS, SET_SAVED_SCHEMA, fetchSchemasLoading, fetchSchemaSuccess, fetchSchemasFail } from '../../reducers/schemasReducer'
import { getSchemas, postSchema } from '../../helpers/api'

function* fetchSchemas() {
  yield put(fetchSchemasLoading())
  yield delay(1000)
  try {
    const schemas = yield call(getSchemas)
    yield put(fetchSchemaSuccess(schemas))
  } catch (err) {
    yield put(fetchSchemasFail(err))
  }
}

function* savedSchema() {
  const data = yield select((state) => state.schemasReducer.toJS().schema)
  try {
    const schema = yield call(postSchema, data)
    console.log('Schema', schema);
  } catch (err) {
    console.log('error', err);
  }
}

function* defaultSaga () {
  yield [
    takeLatest(FETCH_SCHEMAS, fetchSchemas),
    takeLatest(SET_SAVED_SCHEMA, savedSchema)
  ]
}

export const sagas =  [
  defaultSaga
]
