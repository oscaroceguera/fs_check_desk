import { select, takeEvery } from 'redux-saga/effects'
import { getModulesBySchemaId } from '../../helpers/api'
import * as GMR from '../../reducers/getModulesReducer'
import { fetchApiSaga } from '../commons/genericSagas'

function* fetchModules () {
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  yield * fetchApiSaga(
    getModulesBySchemaId,
    [schemaId, localStorage.getItem('token')],
    GMR.fetchModulesLoading,
    GMR.fetchModulesSuccess,
    GMR.fetchModulesFail
  )
}

function* defaultSaga () {
  yield [
    takeEvery(GMR.FETCH_MODULES, fetchModules)
  ]
}

export const sagas = [
  defaultSaga
]
