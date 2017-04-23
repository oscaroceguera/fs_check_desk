import emailValidator from 'email-validator'
import passwordValidator from 'password-validator'

const schema = new passwordValidator()
schema
  .isMin(8)
  .isMax(100)
  .not().spaces()
  // .has().uppercase()
  // .has().lowercase()
  // .has().digits()

export default {
  setDataField (state, e) {
    const { fields } = state
    const { name, value } = e.target
    fields[name] = value
    return fields
  },
  isPassword (item) {
    if (item.length === 0) return 'Min 8 caracteres / Sin espacios en blanco'
    return schema.validate(item) ? '' : 'Min 8 caracteres / Sin espacios en blanc'
  },
  isEmail (item ) {
    return emailValidator.validate(item) ? '' : 'Formato de email invalido'
  },
  hasText (item) {
    return item.length > 1 ? '' : 'Requerido'
  },
  errorTextMessage (item, type) {
    if (type === 'txt') return this.hasText(item)
    if (type === 'password') return this.isPassword(item)
    if (type === 'email') return this.isEmail(item)
  }
}
