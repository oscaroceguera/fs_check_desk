import { createSelector } from 'reselect'

const lnMajor = (item, rang) => item.length > rang

const getCheckList = state => state.checklistReducer.toJS()

export const submitChecklist = createSelector(
  getCheckList,
  ({checklist}) =>
    lnMajor(checklist.schemaType, 1) &&
    lnMajor(checklist.companyName, 1) &&
    lnMajor(checklist.country, 1) &&
    lnMajor(checklist.state, 1) &&
    lnMajor(checklist.town, 1) &&
    lnMajor(checklist.street, 1) &&
    lnMajor(checklist.description, 0) &&
    !lnMajor(checklist.description, 140)
)
