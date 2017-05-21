import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getModulesBySchemaId } from '../../helpers/api'
import { FETCH_MODULES, fetchModulesLoading, fetchModulesSuccess, fetchModulesFail } from '../../reducers/getModulesReducer'

function* fetchModules() {
  yield put(fetchModulesLoading())
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  try {
    const schemas = yield call(getModulesBySchemaId, schemaId, localStorage.getItem('token'))
    yield put(fetchModulesSuccess(schemas))
  } catch (err) {
    yield put(fetchModulesFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeEvery(FETCH_MODULES, fetchModules)
  ]
}

export const sagas =  [
  defaultSaga
]
