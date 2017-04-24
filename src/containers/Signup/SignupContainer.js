import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from '../../reducers/signupReducer'
import aux from '../../helpers/AuxFunctions'
import { passEqualsTxtMsg, showsubmit } from '../../selectors/signupSelector'

import Signup from '../../components/Signup/Signup'
import CircularLoading from '../../components/Progress/CircularLoading'

// TODO: ADMISNTRAR LOADIN
// TODO: MENSAJE DE SIGNUP_SUCCESS
// TODO: MENSAJE DE SIGNUP_FAIL
class SignupContainer extends Component {
  onChangeInput = (e) => {
    this.props.setFields('fields', e.target.name, e.target.value)
  }
  handleErrorText = (field, type) => {
    const { fields } = this.props
    return aux.errorTextMessage(fields[field], type)
  }
  handleSignup = (e) => {
    this.props.signupFanout()
  }
  render () {
    const { isPasswordEqual, disabled, savedLoading } = this.props
    return (
      savedLoading
        ? <CircularLoading />
        : <Signup
            errorTxtContainer={this.handleErrorText}
            onChangeInput={this.onChangeInput}
            handleSignup={this.handleSignup}
            disabled={disabled}
            isPasswordEqual={isPasswordEqual}
          />
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.signupReducer.toJS()
  return {
    fields: stateJS.fields,
    isPasswordEqual: passEqualsTxtMsg(state),
    disabled: !showsubmit(state),
    savedLoading: stateJS.savedLoading,
    savedFail: stateJS.savedFail,
    savedSucces: stateJS.savedSucces,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...singupActions
  }, dispatch)
}

SignupContainer.propTypes = {
  fields: React.PropTypes.object.isRequired,
  isPasswordEqual: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool.isRequired,
  savedLoading: React.PropTypes.bool.isRequired,
  savedFail: React.PropTypes.any,
  savedSucces: React.PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
