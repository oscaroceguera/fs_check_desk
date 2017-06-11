import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import * as SR from '../../reducers/schemasReducer'
import { postSchema, getSchemaById, putSchema } from '../../helpers/api'
import { addApiSaga } from '../commons/genericSagas'

function* savedSchema () {
  const data = yield select((state) => state.schemasReducer.toJS().schema)
  yield * addApiSaga(
    postSchema,
    [data, localStorage.getItem('token')],
    true,
    SR.setSavedSchemaLoading,
    SR.setSavedSchemaSuccess,
    SR.setSavedSchemaFail)
}

function* updateSchema () {
  yield put(SR.setSavedSchemaLoading())
  const data = yield select((state) => state.schemasReducer.toJS().schema)
  yield delay(1000)
  try {
    const schema = yield call(putSchema, data.id, data, localStorage.getItem('token'))
    const _schema = {
      id: schema._id,
      name: schema.name,
      version: schema.version,
      description: schema.description
    }
    yield put(SR.setUpdateSchemaSuccess(_schema))
  } catch (err) {
    yield put(SR.setSavedSchemaFail(err))
  }
}

function* fetchSchemaWatch (action) {
  try {
    const schema = yield call(getSchemaById, action.id, localStorage.getItem('token'))
    const _schema = schema.map(x => ({id: x._id, name: x.name, version: x.version, description: x.description}))
    yield put(SR.fetchSchemaSucess(_schema[0]))
  } catch (e) {
    yield put(SR.fetchSchemaFail(e))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(SR.SET_SAVED_SCHEMA, savedSchema),
    takeLatest(SR.FETCH_SCHEMA, fetchSchemaWatch),
    takeLatest(SR.SET_UPDATE_SCHEMA, updateSchema)
  ]
}

export const sagas = [
  defaultSaga
]
