import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { login } from '../../helpers/api'
import { LOGIN_USER, LOGOUT_USER, loginLoading, resetError, authUser, authUserFail, unAuthUser } from '../../reducers/authReducer'

const setTokenLS = (token) => localStorage.setItem('token', token)

const setUserLS = (user) => localStorage.setItem('user', JSON.stringify(user))

const removeTokenLS = () => localStorage.removeItem('token')

const removeUserLS = () => localStorage.removeItem('user')

function* authorize () {
  yield [put(resetError()), put(loginLoading())]
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
      takeLatest(LOGIN_USER, authorize),
      takeLatest(LOGOUT_USER, logoutFanout)
    ]
}

 export const sagas = [
  defaultSaga
]
