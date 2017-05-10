import React from 'react'
import SignupLoginWrapper from '../Wrappers/SignupLoginWrapper'
import GenericTextField from '../Forms/GenericTextField'
import GenericSubmit from '../Forms/GenericSubmit'

const Signup = ({errorTxtContainer, onChangeInput, disabled, isPasswordEqual, handleSignup}) => {
  return (
    <SignupLoginWrapper>
      <GenericTextField
        title={'Nombre'}
        name={'firstName'}
        errorText={errorTxtContainer('firstName', 'txt')}
        onChange={onChangeInput}
      />
      <GenericTextField
        title={'Apellido'}
        name={'secondName'}
        errorText={errorTxtContainer('secondName', 'txt')}
        onChange={onChangeInput}
      />
      <GenericTextField
        title={'Email'}
        name={'email'}
        errorText={errorTxtContainer('email', 'email')}
        onChange={onChangeInput}
      />
      <GenericTextField
        title={'Password'}
        name={'password'}
        type={'password'}
        errorText={errorTxtContainer('password', 'password')}
        onChange={onChangeInput}
      />
      <GenericTextField
        title={'Confirmar Password'}
        name={'confPassword'}
        type={'password'}
        errorText={isPasswordEqual}
        onChange={onChangeInput}
      />
    <GenericSubmit
      disabled={disabled}
      label={'Signup'}
      onClick={handleSignup}
    />
    </SignupLoginWrapper>
  )
}

const { func, bool, string } = React.PropTypes

Signup.propTypes = {
  errorTxtContainer: func.isRequired,
  onChangeInput: func.isRequired,
  disabled: bool.isRequired,
  isPasswordEqual: string.isRequired,
  handleSignup: func.isRequired
}

export default Signup
