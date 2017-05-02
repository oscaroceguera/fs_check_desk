import { delay } from 'redux-saga'
import { fork, call, put, select, take, cancel } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { login } from '../../helpers/api'
import { LOGIN_USER, LOGOUT_USER, AUTH_USER_FAIL, loginLoading, resetError, authUser, authUserFail, unAuthUser } from '../../reducers/authReducer'

const setTokenLS = (token) => localStorage.setItem('token', token)

const setUserLS = (user) => localStorage.setItem('user', JSON.stringify(user))

const removeTokenLS = () => localStorage.removeItem('token')

const removeUserLS = () => localStorage.removeItem('user')

function* authFlowSaga () {
  while (true) {
    yield take(LOGIN_USER)
    yield fork(authorize)
    yield take([LOGOUT_USER, AUTH_USER_FAIL])
    yield call(logoutFanout)
  }
}

function* authorize () {
  yield [put(resetError()), put(loginLoading())]
  yield delay(1000)
  const data = yield select((state) => state.authReducer.toJS().fields)
  try {
    const response = yield call(login, data)
    yield [call(setTokenLS, response.data.token), call(setUserLS, response.data.user)]
    yield put(authUser())
    browserHistory.push('/dashboard')
  } catch (err) {
    yield put(authUserFail(err))
  }
}

function* logoutFanout () {
  yield delay(300)
  yield put(unAuthUser())
  yield [call(removeTokenLS), call(removeUserLS)]
}

function* defaultSaga () {
    yield [
      fork(authFlowSaga)
    ]
}

 export const sagas = [
  defaultSaga
]
