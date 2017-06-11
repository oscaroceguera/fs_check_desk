import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { signupUser } from '../../helpers/api'
import * as SR from '../../reducers/signupReducer'
import { getSimpleState } from '../commons/genericSelect'

function* signupFanout () {
  yield put(SR.singupLoading())
  yield delay(1000)
  const data = yield getSimpleState('signupReducer', 'fields')
  const dataPost = {
    firstName: data.firstName,
    lastName: data.secondName,
    email: data.email,
    password: data.password
  }
  try {
    yield call(signupUser, dataPost)
    yield put(SR.signupSuccess())
    browserHistory.push('/home/login')
  } catch (err) {
    yield put(SR.signupFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(SR.SET_SIGNUP, signupFanout)
  ]
}

export const sagas = [
  defaultSaga
]
