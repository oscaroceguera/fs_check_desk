import { delay } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
  SET_SAVED_SCHEMA,
  setSavedSchemaLoading,
  setSavedSchemaSuccess,
  setSavedSchemaFail
} from '../../reducers/schemasReducer'
import { postSchema } from '../../helpers/api'


function* savedSchema() {
  yield put(setSavedSchemaLoading())
  const data = yield select((state) => state.schemasReducer.toJS().schema)
  yield delay(1000)
  try {
    const schema = yield call(postSchema, data, localStorage.getItem('token'))
    const _schema = {
      id: schema._id,
      name: schema.name,
      version: schema.version,
      description: schema.description
    }
    yield put(setSavedSchemaSuccess(_schema))
  } catch (err) {
    yield put(setSavedSchemaFail(err))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(SET_SAVED_SCHEMA, savedSchema)
  ]
}

export const sagas =  [
  defaultSaga
]
