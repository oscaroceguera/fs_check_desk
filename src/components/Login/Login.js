import React from 'react'
import GenericSubmit from '../../components/Forms/GenericSubmit'
import SignupLoginWrapper from '../../components/Wrappers/SignupLoginWrapper'
import GenericTextField from '../../components/Forms/GenericTextField'

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

// TODO: proptypes

export default Login
