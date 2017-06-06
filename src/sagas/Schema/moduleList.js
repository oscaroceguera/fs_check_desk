import { select, takeEvery } from 'redux-saga/effects'
import { getModulesBySchemaId } from '../../helpers/api'
import { FETCH_MODULES, fetchModulesLoading, fetchModulesSuccess, fetchModulesFail } from '../../reducers/getModulesReducer'
import { fetchApiSaga } from '../commons/genericSagas'

function* fetchModules () {
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  yield* fetchApiSaga(getModulesBySchemaId, [schemaId, localStorage.getItem('token')], fetchModulesLoading, fetchModulesSuccess, fetchModulesFail)
}

function* defaultSaga () {
  yield [
    takeEvery(FETCH_MODULES, fetchModules)
  ]
}

export const sagas = [
  defaultSaga
]
