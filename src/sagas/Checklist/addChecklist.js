import { delay } from 'redux-saga'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as CR from '../../reducers/Checklist/checklistForm'
import { postChecklist, putChecklist, getItemsBySchemaId } from '../../helpers/api'
import { addApiSaga } from '../commons/genericSagas'
import { getSimpleState } from '../commons/genericSelect'

function* savedChecklist () {
  const data = yield getSimpleState('checklistReducer', 'checklist')
  const schema = yield call(getItemsBySchemaId, data.schemaType, localStorage.getItem('token'))

  data.items = schema

  yield * addApiSaga(
    postChecklist,
    [data, localStorage.getItem('token')],
    true,
    'checklists',
    CR.setLoading,
    CR.setSavedChecklistSuccess,
    CR.setSavedChecklistFail
  )
}

function* updateChecklist () {
  yield put(CR.setLoading())
  const data = yield getSimpleState('checklistReducer', 'checklist')
  yield delay(1000)
  try {
    const checklist = yield call(putChecklist, data.id, data, localStorage.getItem('token'))
    const _checklist = {
      id: checklist._id,
      schemaType: checklist.schemaType,
      companyName: checklist.companyName,
      country: checklist.country,
      state: checklist.state,
      town: checklist.town,
      street: checklist.street,
      number: checklist.number,
      neighborhood: checklist.neighborhood,
      zipcode: checklist.zipcode,
      date: checklist.date,
      description: checklist.description
    }
    yield put(CR.setUpdateChecklistSuccess(_checklist))
  } catch (err) {
    yield put(CR.setSavedChecklistFail())
  }
}

function* defaultSaga () {
  yield [
    takeLatest(CR.SET_SAVED_CHECKLIST, savedChecklist),
    takeLatest(CR.SET_UPDATE_CHECKLIST, updateChecklist)
  ]
}

export const sagas = [
  defaultSaga
]
