import { takeEvery } from 'redux-saga/effects'
import { getModulesBySchemaId } from '../../helpers/api'
import * as GMR from '../../reducers/Module/moduleList'
import { fetchApiSaga } from '../commons/genericSagas'
import { getStateWithSecondItem } from '../commons/genericSelect'

function* fetchModules () {
  const schemaId = yield getStateWithSecondItem('schemasReducer', 'schema', 'id')
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
