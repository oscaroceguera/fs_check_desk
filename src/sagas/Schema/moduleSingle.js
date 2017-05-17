import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
  SET_SAVED_MODULE,
  setSavedModuleLoading,
  setSavedModuleSuccess,
  setSavedModuleFail,
  resetFields
} from '../../reducers/modulesReducer'
import { closeModal } from '../../reducers/modalReducer'

// TODO: INSERTAR EN MONGO
// TODO: MENSAJE DE QUE SE GUARDO
// TODO: CERRAR MODAL Y MOSTRR ERROR

function* savedModule () {
  yield put(setSavedModuleLoading())
  const data = yield select((state) => state.modulesReducer.toJS().module)
  yield delay(1000)
  try {
    yield put(setSavedModuleSuccess(data))
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
