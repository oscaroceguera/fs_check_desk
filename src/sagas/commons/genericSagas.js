import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

export function* deleteApiSaga (fn, args, position, loading, success, fail) {
  yield put(loading())
  try {
    yield call(fn, ...args)
    yield put(success(position))
  } catch (err) {
    yield put(fail(err))
  }
}

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

const matchData = (type, data) => {
  if (type === 'schemas') {
    return {
      id: data._id,
      name: data.name,
      version: data.version,
      description: data.description
    }
  }

  if (type === 'checklists') {
    return {
      id: data._id,
      schemaType: data.schemaType,
      companyName: data.companyName,
      country: data.country,
      state: data.state,
      town: data.town,
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      zipcode: data.zipcode,
      date: data.date,
      description: data.description,
      items: data.items
    }
  }
}

export function* addApiSaga (fn, args, hasRoute, routeName, loading, success, fail) {
  yield put(loading())
  yield delay(1000)
  try {
    const response = yield call(fn, ...args)
    const _response = matchData(routeName, response)
    yield put(success(_response))
    if (!hasRoute) return
    browserHistory.push(`/dashboard/${routeName}/new/${_response.id}`)
  } catch (err) {
    yield put(fail(err))
  }
}
