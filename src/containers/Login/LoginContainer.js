import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../reducers/authReducer'
import aux from '../../helpers/AuxFunctions'

import Login from '../../components/Login/Login'
import { fieldsNotNull } from '../../selectors/loginSelector'

class LoginContainer extends Component {
  onChangeInput = (e) => {
    this.props.setFields('fields', e.target.name, e.target.value)
  }
  handleErrorText = (field, type) => {
    const { fields } = this.props
    return aux.errorTextMessage(fields[field], type)
  }
  handleLogin = (e) => {
    this.props.loginUser()
  }
  render () {
    const { disabled } = this.props
    return (
      <Login
        disabled={disabled}
        handleErrorText={this.handleErrorText}
        onChangeInput={this.onChangeInput}
        handleLogin={this.handleLogin}
      />
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
