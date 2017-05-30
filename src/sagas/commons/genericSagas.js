import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

export function* fetchApiSaga (fn, args, loadingAction, successAction, errorAction) {
  yield put(loadingAction())
  yield delay(1000)
  try {
    const response = yield call(fn, ...args)
    yield put(successAction(response))
  } catch (err) {
    yield put(errorAction(err))
  }
}

export function* addApiSaga (fn, args, route, loading, success, fail) {
  yield put(loading())
  yield delay(1000)
  try {
    const response = yield call(fn, ...args)
    const _response = {
      id: response._id,
      name: response.name,
      version: response.version,
      description: response.description
    }
    yield put(success(response))
    if (!route) return
    browserHistory.push(`/dashboard/schemas/new/${_response.id}`)
  } catch (err) {
    yield put(fail(err))
  }
}
