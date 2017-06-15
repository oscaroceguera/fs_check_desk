import { fromJS } from 'immutable'

/**
 * ACTIONS & ACTIONS CREATORS
**/

// FIELDS
const SET_FIELDS = 'src/schemas/SET_FIELDS'
const RESET_FIELDS = 'src/schemas/RESET_FIELDS'

export const setSchemaFields = (section, item, value) => ({ type: SET_FIELDS, section, item, value })
export const resetFields = () => ({ type: RESET_FIELDS })

// SAVE SCHEMA
export const SET_SAVED_SCHEMA = 'src/schemas/SET_SAVED_SCHEMA'
export const SET_SAVED_SCHEMA_LOADING = 'src/schemas/SET_SAVED_SCHEMA_LOADING'
export const SET_SAVED_SCHEMA_SUCCESS = 'src/schemas/SET_SAVED_SCHEMA_SUCCESS'
export const SET_SAVED_SCHEMA_FAIL = 'src/schemas/SET_SAVED_SCHEMA_FAIL'

export const setSavedSchema = () => ({ type: SET_SAVED_SCHEMA })
export const setSavedSchemaSuccess = (schema) => ({ type: SET_SAVED_SCHEMA_SUCCESS, schema })
export const setSavedSchemaLoading = () => ({ type: SET_SAVED_SCHEMA_LOADING })
export const setSavedSchemaFail = (err) => ({ type: SET_SAVED_SCHEMA_FAIL, err })

// UPDATE SCHEMA
export const SET_UPDATE_SCHEMA = 'src/schemas/SET_UPDATE_SCHEMA'
export const SET_UPDATE_SCHEMA_SUCCESS = 'src/schemas/SET_UPDATE_SCHEMA_SUCCESS'

export const setUpdateSchema = () => ({ type: SET_UPDATE_SCHEMA })
export const setUpdateSchemaSuccess = (schema) => ({ type: SET_UPDATE_SCHEMA_SUCCESS, schema })

// FETCH SCHEMAS
export const FETCH_SCHEMA = 'src/schemas/FETCH_SCHEMA'
export const FETCH_SCHEMA_SUCCESS = 'src/schemas/FETCH_SCHEMA_SUCCESS'
export const FETCH_SCHEMA_FAIL = 'src/schemas/FETCH_SCHEMA_FAIL'

export const fetchSchema = (id) => ({ type: FETCH_SCHEMA, id })
export const fetchSchemaSucess = (schema) => ({ type: FETCH_SCHEMA_SUCCESS, schema })
export const fetchSchemaFail = (err) => ({ type: FETCH_SCHEMA_FAIL, err })

/**
 * REDUCER
**/

const initialState = fromJS({
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
    case RESET_FIELDS:
      return state.merge(initialState)
    case SET_SAVED_SCHEMA_LOADING:
      return state.merge({
        savedSchemasLoading: true,
        savedSchemaFail: null
      })
    case FETCH_SCHEMA_SUCCESS:
    case SET_UPDATE_SCHEMA_SUCCESS:
    case SET_SAVED_SCHEMA_SUCCESS:
      return state.merge({
        schema: action.schema,
        savedSchemasLoading: false
      })
    case FETCH_SCHEMA_FAIL:
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
