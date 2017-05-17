import { sagas as SignupSagas } from './Signup'
import { sagas as LoginSagas } from './Login'
import { sagas as SchemasSagas } from './Schema'
import { sagas as SchemasListSagas } from './Schema/schemaList'
import { sagas as ModuleSingleSagas } from './Schema/moduleSingle'

export default [
  ...SignupSagas,
  ...LoginSagas,
  ...SchemasSagas,
  ...SchemasListSagas,
  ...ModuleSingleSagas
]
