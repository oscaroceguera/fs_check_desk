import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { signupUser } from '../../helpers/api'
import { SET_SIGNUP, singupLoading, signupSuccess, signupFail } from '../../reducers/signupReducer'

function* signupFanout () {
  yield put(singupLoading())
  yield delay(1000)
  const data = yield select((state) => state.signupReducer.toJS().fields)
  const dataPost = {
    firstName: data.firstName,
    lastName: data.secondName,
    email: data.email,
    password: data.password
  }
  try {
    yield call(signupUser, dataPost)
    yield put(signupSuccess())
    browserHistory.push('/home/login')
  } catch (err) {
    yield put(signupFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(SET_SIGNUP, signupFanout)
  ]
}

export const sagas = [
  defaultSaga
]
