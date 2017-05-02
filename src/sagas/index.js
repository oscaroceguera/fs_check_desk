import { sagas as SignupSagas } from './Signup'
import { sagas as LoginSagas } from './Login'

export default [
  ...SignupSagas,
  ...LoginSagas
]
