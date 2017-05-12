import { createSelector } from 'reselect'
import { every } from 'lodash/collection'

const getItems = (state) => state.schemasReducer.toJS()

const everySchema = createSelector(
  getItems,
  ({schema}) => every(schema)
)

const descriptionMax140 = createSelector(
  getItems,
  ({schema}) => schema.description.length > 140
)

export const submitSchema = createSelector(
  [everySchema, descriptionMax140],
  (everySchema, max140) => everySchema && !max140
)
