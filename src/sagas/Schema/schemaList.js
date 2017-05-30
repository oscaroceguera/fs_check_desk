import { takeLatest } from 'redux-saga/effects'
import { getSchemas } from '../../helpers/api'
import { FETCH_SCHEMAS, fetchSchemasLoading, fetchSchemaSuccess, fetchSchemasFail } from '../../reducers/getSchemasReducer'
import { fetchApiSaga } from '../commons/genericSagas'

function* fetchSchemas() {
  yield* fetchApiSaga(getSchemas, [localStorage.getItem('token')], fetchSchemasLoading, fetchSchemaSuccess, fetchSchemasFail)
}

function* defaultSaga () {
  yield [
    takeLatest(FETCH_SCHEMAS, fetchSchemas)
  ]
}

export const sagas =  [
  defaultSaga
]
