import { fromJS, List } from 'immutable'

export const GO_TO_SCHEMA = 'src/schemas/GO_TO_SCHEMA'
export const GO_TO_ADD_NEW_SCHEMA = 'src/schemas/GO_TO_ADD_NEW_SCHEMA'

export const FETCH_SCHEMAS = 'src/schemas/FETCH_SCHEMAS'
export const FETCH_SCHEMAS_LOADING = 'src/schemas/FETCH_SCHEMAS_LOADING'
export const FETCH_SCHEMAS_SUCCESS = 'src/schemas/FETCH_SCHEMAS_SUCCESS'
export const FETCH_SCHEMAS_FAIL = 'src/schemas/FETCH_SCHEMAS_FAIL'

export const goToAddNewSchema = () => ({ type: GO_TO_ADD_NEW_SCHEMA })
export const goToSchema = (id) => ({ type: GO_TO_SCHEMA, id })

export const fetchSchemas = () => ({ type: FETCH_SCHEMAS })
export const fetchSchemasLoading = () => ({ type: FETCH_SCHEMAS_LOADING })
export const fetchSchemaSuccess = (schemas) => ({ type: FETCH_SCHEMAS_SUCCESS, schemas })
export const fetchSchemasFail = (err) => ({ type: FETCH_SCHEMAS_FAIL, err })

const initialState = fromJS({
  schemas: [],
  schemasLoading: false,
  schemasFail: null
})

function getSchemasReducer (state = initialState, action) {
  switch (action.type) {
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
    default:
      return state
  }
}

export default getSchemasReducer
