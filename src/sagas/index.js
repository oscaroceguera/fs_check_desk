import { sagas as SignupSagas } from './Signup'
import { sagas as LoginSagas } from './Login'
import { sagas as SchemasSagas } from './Schema'

export default [
  ...SignupSagas,
  ...LoginSagas,
  ...SchemasSagas
]
