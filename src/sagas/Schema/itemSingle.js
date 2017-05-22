import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
  SET_SAVED_ITEM,
  setSavedItemLoading,
  setSavedItemSuccess,
  setSavedItemFail,
  resetState
} from '../../reducers/itemsReducer'
import { fetchItems } from '../../reducers/getItemsReducer'
import { postItem } from '../../helpers/api'

function* savedItem () {
  yield put(setSavedItemLoading())
  const [schemaId, data] = yield([select(state => state.schemasReducer.toJS().schema.id), select((state) => state.itemsReducer.toJS().item)])
  data.schemaId = schemaId
  try {
    const item = yield call(postItem, data, localStorage.getItem('token'))
    yield put(setSavedItemSuccess(item))
    yield put(resetState())
    yield put(fetchItems())
  } catch(err) {
    yield put(setSavedItemFail(err))
  }
}

function* defaultSaga() {
  yield [
    takeLatest(SET_SAVED_ITEM, savedItem)
  ]
}

export const sagas = [
  defaultSaga
]
