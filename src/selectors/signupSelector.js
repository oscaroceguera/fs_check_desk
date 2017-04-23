import { createSelector } from 'reselect'
import aux from '../helpers/AuxFunctions'
import { every } from 'lodash/collection'

const getItems = (state) => state.signupReducer.toJS()

const confPasswordLength = createSelector(
  getItems,
  ({fields}) => fields.confPassword.length === 0 ? false : true
)

const passAreEquals = createSelector(
  getItems,
  ({fields}) => {
    const { password, confPassword } = fields
    return password === confPassword
  }
)

const isPassword = createSelector(
  getItems,
  ({fields}) => aux.isPasswordToSelector(fields.confPassword)
)

export const passEqualsTxtMsg = createSelector(
  [confPasswordLength,passAreEquals, isPassword],
  (passLength, equals, isPassword) => {
    return passLength && equals && isPassword ? '' : 'Los passwords no son iguales'
  }
)

const passEquals = createSelector(
  [confPasswordLength,passAreEquals, isPassword],
  (passLength, equals, isPassword) => {
    return passLength && equals && isPassword
  }
)

const fieldsNotNull = createSelector(
  getItems,
  ({fields}) => every(fields)
)

const isEmail = createSelector(
  getItems,
  ({fields}) => aux.isEmailSelector(fields.email)
)

export const showsubmit = createSelector(
  [fieldsNotNull, passEquals, isEmail],
  (fieldsNotNull, passEquals, isEmail) => fieldsNotNull && passEquals && isEmail
)
