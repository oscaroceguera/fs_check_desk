import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import * as MR from '../../reducers/modulesReducer'
import { fetchModules } from '../../reducers/getModulesReducer'
import { fetchItems } from '../../reducers/getItemsReducer'
import { closeModal, openModal } from '../../reducers/modalReducer'
import { postModule, putModule } from '../../helpers/api'

function* savedModule () {
  yield put(MR.setSavedModuleLoading())
  const schemaId = yield select(state => state.schemasReducer.toJS().schema.id)
  const data = yield select((state) => state.modulesReducer.toJS().module)
  data.schemaId = schemaId
  yield delay(1000)
  try {
    const module = yield call(postModule, data, localStorage.getItem('token'))
    yield put(MR.setSavedModuleSuccess(module))
    yield put(fetchModules())
    yield put(MR.resetFields())
    yield put(closeModal())
  } catch (err) {
    yield put(MR.setSavedModuleFail(err))
  }
}

function* modalUpdateModule (action) {
  yield put(MR.setSavedModuleSuccess(action.module))
  yield put(openModal())
}

function* updateModule () {
  yield put(MR.setSavedModuleLoading())
  const data = yield select((state) => state.modulesReducer.toJS().module)
  yield delay(1000)
  try {
    const module = yield call(putModule, data.id, data, localStorage.getItem('token'))
    yield put(MR.setSavedModuleSuccess(module))
    yield put(fetchModules())
    yield put(fetchItems())
    yield put(MR.resetFields())
    yield put(closeModal())
  } catch (err) {
    yield put(MR.setSavedModuleFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(MR.SET_SAVED_MODULE, savedModule),
    takeLatest(MR.SHOW_MODAL_UPDATE_MODULE, modalUpdateModule),
    takeLatest(MR.SET_UPDATE_MODULE, updateModule)
  ]
}

export const sagas = [
  defaultSaga
]
