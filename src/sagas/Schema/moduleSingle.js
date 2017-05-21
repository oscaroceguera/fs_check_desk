import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
  SET_SAVED_MODULE,
  setSavedModuleLoading,
  setSavedModuleSuccess,
  setSavedModuleFail,
  resetFields
} from '../../reducers/modulesReducer'
import { fetchModules } from '../../reducers/getModulesReducer'
import { closeModal } from '../../reducers/modalReducer'
import { postModule } from '../../helpers/api'

function* savedModule () {
  yield put(setSavedModuleLoading())
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  const data = yield select((state) => state.modulesReducer.toJS().module)
  data.schemaId = schemaId
  yield delay(1000)
  try {
    const module = yield call(postModule, data, localStorage.getItem('token'))
    yield put(setSavedModuleSuccess(module))
    yield put(fetchModules())
    yield put(resetFields())
    yield put(closeModal())
  } catch (err) {
    yield put(setSavedModuleFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(SET_SAVED_MODULE, savedModule)
  ]
}

export const sagas = [
  defaultSaga
]
