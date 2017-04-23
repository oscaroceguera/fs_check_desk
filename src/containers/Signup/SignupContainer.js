import React, {Component} from 'react'
import SignupLoginWrapper from '../../components/Wrappers/SignupLoginWrapper'
import GenericTextField from '../../components/Forms/GenericTextField'

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
    const {fields} = this.state
    const {name, value} = e.target

    fields[name] = value

    this.setState(fields)
  }

  render () {
    console.log('STATE', this.state);
    return (
      <SignupLoginWrapper>
        <GenericTextField
          title={'First name'}
          name={'firstName'}
          errorText={'required'}
          onChange={this.onChangeInput}
        />
        <GenericTextField
          title={'Last name'}
          name={'secondName'}
          errorText={'required'}
          onChange={this.onChangeInput}
        />
        <GenericTextField
          title={'Email'}
          name={'email'}
          errorText={'required'}
          onChange={this.onChangeInput}
        />
        <GenericTextField
          title={'Password'}
          name={'password'}
          errorText={'required'}
          onChange={this.onChangeInput}
        />
        <GenericTextField
          title={'Confirm Password'}
          name={'confPassword'}
          errorText={'required'}
          onChange={this.onChangeInput}
        />
      </SignupLoginWrapper>
    )
  }
}

export default SignupContainer
