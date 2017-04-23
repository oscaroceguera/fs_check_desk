import React, {Component} from 'react'
import aux from '../../helpers/AuxFunctions'
import SignupLoginWrapper from '../../components/Wrappers/SignupLoginWrapper'
import GenericTextField from '../../components/Forms/GenericTextField'

// TODO: confirmar password
class SignupContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields : {
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confPassword: ''
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
    console.log('STATE', this.state);
    return (
      <SignupLoginWrapper>
        <GenericTextField
          title={'Nombre'}
          name={'firstName'}
          errorText={this.handleErrorText('firstName', 'txt')}
          onChange={this.onChangeInput}
        />
        <GenericTextField
          title={'Apellido'}
          name={'secondName'}
          errorText={this.handleErrorText('secondName', 'txt')}
          onChange={this.onChangeInput}
        />
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
        <GenericTextField
          title={'Confirmar Password'}
          name={'confPassword'}
          type={'password'}
          errorText={this.handleErrorText('confPassword', 'password')}
          onChange={this.onChangeInput}
        />
      </SignupLoginWrapper>
    )
  }
}

export default SignupContainer
