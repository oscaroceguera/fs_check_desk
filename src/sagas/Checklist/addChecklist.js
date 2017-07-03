// import { delay } from 'redux-saga'
import { takeLatest } from 'redux-saga/effects'
import * as CR from '../../reducers/Checklist/checklistForm'
import { postChecklist } from '../../helpers/api'
import { addApiSaga } from '../commons/genericSagas'
import { getSimpleState } from '../commons/genericSelect'

function* savedChecklist () {
  const data = yield getSimpleState('checklistReducer', 'checklist')
  yield * addApiSaga(
    postChecklist,
    [data, localStorage.getItem('token')],
    true,
    'checklists',
    CR.setLoading,
    CR.setSavedChecklistSuccess,
    CR.setSavedChecklistFail)
}

function* defaultSaga () {
  yield [
    takeLatest(CR.SET_SAVED_CHECKLIST, savedChecklist)
  ]
}

export const sagas = [
  defaultSaga
]
