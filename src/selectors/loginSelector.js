import { createSelector } from 'reselect'
import { every } from 'lodash/collection'

const getItems = (state) => state.authReducer.toJS()

export const fieldsNotNull = createSelector(
  getItems,
  ({fields}) => every(fields)
)
