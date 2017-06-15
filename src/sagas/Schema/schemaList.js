import { takeLatest } from 'redux-saga/effects'
import { getSchemas } from '../../helpers/api'
import * as GSR from '../../reducers/Schema/schemaList'
import { fetchApiSaga } from '../commons/genericSagas'

function* fetchSchemas () {
  yield * fetchApiSaga(
    getSchemas,
    [localStorage.getItem('token')],
    GSR.fetchSchemasLoading,
    GSR.fetchSchemaSuccess,
    GSR.fetchSchemasFail
  )
}

function* defaultSaga () {
  yield [
    takeLatest(GSR.FETCH_SCHEMAS, fetchSchemas)
  ]
}

export const sagas = [
  defaultSaga
]
