import { takeLatest, put } from 'redux-saga/effects'
import { GO_TO_ADD_NEW_SCHEMA, GO_TO_SCHEMA } from '../../reducers/getSchemasReducer'
import { resetFields } from '../../reducers/schemasReducer'
import { resetModules } from '../../reducers/getModulesReducer'
import { browserHistory } from 'react-router'

function* goToSchemaWatch (action) {
  yield put(resetFields())
  yield put(resetModules())
  browserHistory.push(`/dashboard/schemas/new/${action.id}`)
}

function* goToAddSchemaWatch () {
  yield put(resetFields())
  browserHistory.push(`/dashboard/schemas/new`)
}

function* defaultSaga () {
  yield [
    takeLatest(GO_TO_ADD_NEW_SCHEMA, goToAddSchemaWatch),
    takeLatest(GO_TO_SCHEMA, goToSchemaWatch)
  ]
}

export const sagas = [
  defaultSaga
]
