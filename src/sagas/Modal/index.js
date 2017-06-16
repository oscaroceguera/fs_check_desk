import { put, takeLatest } from 'redux-saga/effects'
import * as MODAL from '../../reducers/Modal'
import * as MODULE from '../../reducers/Module/moduleForm'

function* cancelModal () {
  yield put(MODULE.resetFields())
  yield put(MODAL.closeModal())
}

function* defaultSaga () {
  yield [
    takeLatest(MODAL.SET_CLOSE_MODAL, cancelModal)
  ]
}

export const sagas = [
  defaultSaga
]
