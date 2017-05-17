import { createSelector } from 'reselect'

const lnMajor = (item, rang) => item.length > rang

/**
 ** Schema Form
 */
const getSchemaItems = (state) => state.schemasReducer.toJS()

const everySchema = createSelector(
  getSchemaItems,
  ({schema}) => lnMajor(schema.name, 1) && lnMajor(schema.version, 1) && lnMajor(schema.description, 0)
)

const descriptionMax140 = createSelector(getSchemaItems, ({schema}) => lnMajor(schema.description, 140))

export const submitSchema = createSelector(
  [everySchema, descriptionMax140],
  (everySchema, max140) => everySchema && !max140
)

/**
 ** Module Form
 */
const getModuleItems = (state) => state.modulesReducer.toJS()

export const everyModuleItems = createSelector(
  getModuleItems,
  ({module}) => lnMajor(module.name, 1) && lnMajor(module.number, 0) && Number(module.order)
)
