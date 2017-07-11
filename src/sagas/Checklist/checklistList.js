import { takeLatest } from 'redux-saga/effects'
import * as CR from '../../reducers/Checklist/checklistList'
import { getChecklists } from '../../helpers/api'
import { fetchApiSaga } from '../commons/genericSagas'

function* fetchChecklistWatch () {
  yield * fetchApiSaga(
    getChecklists,
    [localStorage.getItem('token')],
    CR.fetchChecklistsLoading,
    CR.fetchChecklistsSuccess,
    CR.fetchChecklistsFail
  )
}

function* defaultSaga () {
  yield [
    takeLatest(CR.FETCH_CHECKLISTS, fetchChecklistWatch)
  ]
}

export const sagas = [
  defaultSaga
]
