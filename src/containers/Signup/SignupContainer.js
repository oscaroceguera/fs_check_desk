import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from '../../reducers/Signup'
import aux from '../../helpers/AuxFunctions'
import { passEqualsTxtMsg, showsubmit } from '../../selectors/signupSelector'

import { Signup, CircularLoading } from '../../components'
import SnackbarContainer from '../Snackbar/SnackbarContainer'

class SignupContainer extends Component {
  componentWillMount () {
    this.props.resetForm()
  }

  handleErrorText = (field, type) => {
    const { fields } = this.props
    return aux.errorTextMessage(fields[field], type)
  }

  render () {
    const { isPasswordEqual, disabled, savedLoading, message } = this.props
    return (
      <div>
        {
          savedLoading
            ? <CircularLoading />
            : <Signup
              errorTxtContainer={this.handleErrorText}
              onChangeInput={(e) => this.props.setFields('fields', e.target.name, e.target.value)}
              handleSignup={(e) => this.props.setSignup()}
              disabled={disabled}
              isPasswordEqual={isPasswordEqual}
              />
        }
        {message && <SnackbarContainer msg={message}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.signupReducer.toJS()
  let msg = stateJS.savedFail ? stateJS.savedFail : stateJS.message
  return {
    fields: stateJS.fields,
    isPasswordEqual: passEqualsTxtMsg(state),
    disabled: !showsubmit(state),
    savedLoading: stateJS.savedLoading,
    message: msg
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...singupActions
  }, dispatch)
}

const { object, string, bool } = PropTypes

SignupContainer.propTypes = {
  fields: object.isRequired,
  isPasswordEqual: string.isRequired,
  disabled: bool.isRequired,
  savedLoading: bool.isRequired,
  message: string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
