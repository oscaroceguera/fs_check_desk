import React from 'react'
import SignupLoginWrapper from '../Wrappers/SignupLoginWrapper'
import GenericTextField from '../Forms/GenericTextField'
import GenericSubmit from '../Forms/GenericSubmit'

const Login = ({disabled, handleErrorText, onChangeInput, handleLogin}) => (
  <SignupLoginWrapper>
    <GenericTextField
      title={'Email'}
      name={'email'}
      errorText={handleErrorText('email', 'email')}
      onChange={onChangeInput}
    />
    <GenericTextField
      title={'Password'}
      name={'password'}
      type={'password'}
      errorText={handleErrorText('password', 'password')}
      onChange={onChangeInput}
    />
    <GenericSubmit
      disabled={disabled}
      label={'login'}
      onClick={handleLogin}
    />
  </SignupLoginWrapper>
)

const { bool, func } = React.PropTypes

Login.propTypes = {
  disabled: bool.isRequired,
  handleErrorText: func.isRequired,
  onChangeInput: func.isRequired,
  handleLogin: func.isRequired
}

export default Login
