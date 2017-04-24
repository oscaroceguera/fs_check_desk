import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from '../../reducers/signupReducer'
import aux from '../../helpers/AuxFunctions'
import { passEqualsTxtMsg, showsubmit } from '../../selectors/signupSelector'

import Signup from '../../components/Signup/Signup'
import CircularLoading from '../../components/Progress/CircularLoading'
import SnackbarContainer from '../Snackbar/SnackbarContainer'

class SignupContainer extends Component {
  componentWillMount () {
    this.props.resetForm()
  }
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
    const {
      isPasswordEqual, disabled, savedLoading,
      savedFail, savedSucces, message
    } = this.props
    return (
      <div>
        {
          savedLoading
            ? <CircularLoading />
            : <Signup
              errorTxtContainer={this.handleErrorText}
              onChangeInput={this.onChangeInput}
              handleSignup={this.handleSignup}
              disabled={disabled}
              isPasswordEqual={isPasswordEqual}
              />
        }
        {savedFail && <SnackbarContainer msg={savedFail}/>}
        {savedSucces && <SnackbarContainer msg={message}/>}
      </div>
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
    message: stateJS.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...singupActions
  }, dispatch)
}

const { object, string, bool, any } = React.PropTypes

SignupContainer.propTypes = {
  fields: object.isRequired,
  isPasswordEqual: string.isRequired,
  disabled: bool.isRequired,
  savedLoading: bool.isRequired,
  savedFail: any,
  savedSucces: bool.isRequired,
  message: string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
