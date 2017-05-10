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
  isPassword (item) {
    if (item.length === 0) return 'Min 8 caracteres / Sin espacios en blanco'
    return schema.validate(item) ? '' : 'Min 8 caracteres / Sin espacios en blanc'
  },
  isPasswordToSelector (item) {
    if (item.length === 0) return
    return schema.validate(item)
  },
  isEmail (item ) {
    return emailValidator.validate(item) ? '' : 'Formato de email invalido'
  },
  isEmailSelector (item ) {
    return emailValidator.validate(item)
  },
  hasText (item) {
    return item.length > 1 ? '' : 'Requerido'
  },
  max140 (item) {
    if (item.length < 1 ) return 'Requerido'
    if (item.length > 140) return 'es max 140'
  },
  errorTextMessage (item, type) {
    if (type === 'txt') return this.hasText(item)
    if (type === 'password') return this.isPassword(item)
    if (type === 'email') return this.isEmail(item)
    if (type === 'max140') return this.max140(item)
  }
}
