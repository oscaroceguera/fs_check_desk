import { takeLatest, put } from 'redux-saga/effects'
import { GO_TO_ADD_NEW_SCHEMA } from '../../reducers/getSchemasReducer'
import { resetFields } from '../../reducers/schemasReducer'
import { browserHistory } from 'react-router'

function* goToAddSchemaWatch () {
  yield put(resetFields())
  browserHistory.push(`/dashboard/schemas/new`)
}

function* defaultSaga() {
  yield [
    takeLatest(GO_TO_ADD_NEW_SCHEMA, goToAddSchemaWatch)
  ]
}

export const sagas = [
  defaultSaga
]
