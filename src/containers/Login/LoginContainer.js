import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../reducers/authReducer'
import aux from '../../helpers/AuxFunctions'
import GenericSubmit from '../../components/Forms/GenericSubmit'
import SignupLoginWrapper from '../../components/Wrappers/SignupLoginWrapper'
import GenericTextField from '../../components/Forms/GenericTextField'
import { fieldsNotNull } from '../../selectors/loginSelector'

class LoginContainer extends Component {
  onChangeInput = (e) => {
    this.props.setFields('fields', e.target.name, e.target.value)
  }

  handleErrorText(field, type) {
    const { fields } = this.props
    return aux.errorTextMessage(fields[field], type)
  }

  render () {
    const { disabled } = this.props

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
        <GenericSubmit
          disabled={disabled}
          label={'login'}
        />
      </SignupLoginWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.authReducer.toJS()
  return {
    fields: stateJS.fields,
    disabled: !fieldsNotNull(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...loginActions
  }, dispatch)
}

LoginContainer.propTypes = {
  fields: React.PropTypes.object.isRequired,
  disabled: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
