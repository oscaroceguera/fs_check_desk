import { sagas as SignupSagas } from './Signup'
import { sagas as LoginSagas } from './Login'
import { sagas as SchemasSagas } from './Schema'
import { sagas as SchemasListSagas } from './Schema/schemaList'
import { sagas as ModuleSingleSagas } from './Schema/moduleSingle'
import { sagas as ModuleListSagas } from './Schema/moduleList'
import { sagas as ItemSingleSagas } from './Schema/itemSingle'
import { sagas as ItemListSagas } from './Schema/itemList'

export default [
  ...SignupSagas,
  ...LoginSagas,
  ...SchemasSagas,
  ...SchemasListSagas,
  ...ModuleSingleSagas,
  ...ModuleListSagas,
  ...ItemSingleSagas,
  ...ItemListSagas
]
