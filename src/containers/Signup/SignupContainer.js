import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from '../../reducers/signupReducer'
import SignupLoginWrapper from '../../components/Wrappers/SignupLoginWrapper'
import GenericTextField from '../../components/Forms/GenericTextField'
import GenericSubmit from '../../components/Forms/GenericSubmit'
import aux from '../../helpers/AuxFunctions'
import { passEqualsTxtMsg, showsubmit } from '../../selectors/signupSelector'


// TODO: showsubmit
class SignupContainer extends Component {

  onChangeInput = (e) => {
    this.props.setFields('fields', e.target.name, e.target.value)
  }

  handleErrorText(field, type) {
    const { fields } = this.props
    return aux.errorTextMessage(fields[field], type)
  }

  render () {
    const { isPasswordEqual, disabled } = this.props
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
          errorText={isPasswordEqual}
          onChange={this.onChangeInput}
        />
      <GenericSubmit
        disabled={disabled}
        label={'Signup'}
      />
      </SignupLoginWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.signupReducer.toJS()
  return {
    fields: stateJS.fields,
    isPasswordEqual: passEqualsTxtMsg(state),
    disabled: !showsubmit(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...singupActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
