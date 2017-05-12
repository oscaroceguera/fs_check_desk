import { fromJS, List } from 'immutable'

const SET_FIELDS = 'src/schemas/SET_FIELDS'
export const FETCH_SCHEMAS = 'src/schemas/FETCH_SCHEMAS'
export const FETCH_SCHEMAS_LOADING = 'src/schemas/FETCH_SCHEMAS_LOADING'
export const FETCH_SCHEMAS_SUCCESS = 'src/schemas/FETCH_SCHEMAS_SUCCESS'
export const FETCH_SCHEMAS_FAIL = 'src/schemas/FETCH_SCHEMAS_FAIL'

export const SET_SAVED_SCHEMA = 'src/schemas/SET_SAVED_SCHEMA'
export const SET_SAVED_SCHEMA_LOADING = 'src/schemas/SET_SAVED_SCHEMA_LOADING'
export const SET_SAVED_SCHEMA_SUCCESS = 'src/schemas/SET_SAVED_SCHEMA_SUCCESS'
export const SET_SAVED_SCHEMA_FAIL = 'src/schemas/SET_SAVED_SCHEMA_FAIL'

export const setFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const fetchSchemas = () => ({ type: FETCH_SCHEMAS })
export const fetchSchemasLoading = () => ({ type: FETCH_SCHEMAS_LOADING })
export const fetchSchemaSuccess = (schemas) => ({ type: FETCH_SCHEMAS_SUCCESS, schemas })
export const fetchSchemasFail = (err) => ({ type: FETCH_SCHEMAS_FAIL, err })

export const setSavedSchema = () => ({ type: SET_SAVED_SCHEMA })
export const setSavedSchemaLoading = () => ({ type: SET_SAVED_SCHEMA_LOADING })
export const setSavedSchemaSuccess = (schema) => ({ type: SET_SAVED_SCHEMA_SUCCESS, schema })
export const setSavedSchemaFail = (err) => ({ type: SET_SAVED_SCHEMA_FAIL, err })

const initialState = fromJS({
  schemas: [],
  schemasLoading: false,
  schemasFail: null,
  schema: {
    name: '',
    version: '',
    description: ''
  },
  savedSchemasLoading: false,
  savedSchemaFail: null
})

function schemasReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FIELDS:
      return state.setIn([action.section, action.item], action.value)
    case FETCH_SCHEMAS_LOADING:
      return state.merge({
        schemasLoading: true,
        schemasFail: null
      })
    case FETCH_SCHEMAS_SUCCESS:
      return state.merge({
        schemasLoading: false,
        schemas: List.of(...action.schemas)
      })
    case FETCH_SCHEMAS_FAIL:
      return state.merge({
        schemasLoading: false,
        schemasFail: action.err
      })
    case SET_SAVED_SCHEMA_LOADING:
      return state.merge({
        savedSchemasLoading: true,
        savedSchemaFail: null
      })
    case SET_SAVED_SCHEMA_SUCCESS:
      return state.merge({
        schema: action.schema,
        savedSchemasLoading: false,
      })
    case SET_SAVED_SCHEMA_FAIL:
      return state.merge({
        savedSchemasLoading: false,
        savedSchemaFail: action.err
      })
    default:
      return state
  }
}

export default schemasReducer
