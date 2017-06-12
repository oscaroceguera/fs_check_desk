import { takeLatest } from 'redux-saga/effects'
import { GO_TO_ADD_NEW_CHECKLIST } from '../../reducers/getChecklistReducer'
import { browserHistory } from 'react-router'

function* linkToChecklist () {
  yield browserHistory.push(`/dashboard/checklists/new`)
}

function* defaultSaga () {
  yield [
    takeLatest(GO_TO_ADD_NEW_CHECKLIST, linkToChecklist)
  ]
}

export const sagas = [
  defaultSaga
]
