import React, {Component} from 'react'
import aux from '../../helpers/AuxFunctions'
import SignupLoginWrapper from '../../components/Wrappers/SignupLoginWrapper'
import GenericTextField from '../../components/Forms/GenericTextField'

class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields : {
        email: '',
        password: ''
      }
    }
  }

  onChangeInput = (e) => {
    const fields = aux.setDataField(this.state, e)
    this.setState(fields)
  }

  handleErrorText(field, type) {
    return aux.errorTextMessage(this.state.fields[field], type)
  }

  render () {
    return (
      <SignupLoginWrapper>
        <GenericTextField
          title={'Email'}
          name={'email'}
          errorText={this.handleErrorText('email', 'email')}
          onChange={this.onChangeInput}
        />
        <GenericTextField
          title={'Password'}
          name={'password'}
          type={'password'}
          errorText={this.handleErrorText('password', 'password')}
          onChange={this.onChangeInput}
        />
      </SignupLoginWrapper>
    )
  }
}

export default LoginContainer
