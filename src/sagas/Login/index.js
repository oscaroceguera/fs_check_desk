import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { login } from '../../helpers/api'
import * as authReducer from '../../reducers/authReducer'
import { getSimpleState } from '../commons/genericSelect'

const setTokenLS = (token) => localStorage.setItem('token', token)
const setUserLS = (user) => localStorage.setItem('user', JSON.stringify(user))
const removeTokenLS = () => localStorage.removeItem('token')
const removeUserLS = () => localStorage.removeItem('user')

function* authorize () {
  yield [put(authReducer.resetError()), put(authReducer.loginLoading())]
  const data = yield getSimpleState('authReducer', 'fields')
  try {
    const response = yield call(login, data)
    yield [call(setTokenLS, response.data.token), call(setUserLS, response.data.user)]

    yield put(authReducer.authUser())
    browserHistory.push('/dashboard')
  } catch (err) {
    yield put(authReducer.authUserFail(err))
  }
}

function* logoutFanout () {
  yield delay(300)
  yield put(authReducer.unAuthUser())
  yield [call(removeTokenLS), call(removeUserLS)]
}

function* defaultSaga () {
  yield [
    takeLatest(authReducer.LOGIN_USER, authorize),
    takeLatest(authReducer.LOGOUT_USER, logoutFanout)
  ]
}

export const sagas = [
  defaultSaga
]
