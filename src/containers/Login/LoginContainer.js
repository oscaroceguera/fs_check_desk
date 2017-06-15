import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../reducers/Auth'
import aux from '../../helpers/AuxFunctions'

import SnackbarContainer from '../Snackbar/SnackbarContainer'
import CircularLoading from '../../components/Progress/CircularLoading'
import Login from '../../components/Login/Login'
import { fieldsNotNull } from '../../selectors/loginSelector'

class LoginContainer extends Component {

  onChangeInput = (e) => this.props.setFields('fields', e.target.name, e.target.value)

  handleErrorText = (field, type) => {
    const { fields } = this.props
    return aux.errorTextMessage(fields[field], type)
  }

  handleLogin = (e) => this.props.loginUser()

  render () {
    const { disabled, loading, error } = this.props
    return (
      <div>
        {
          loading
            ? <CircularLoading />
            : <Login
                disabled={disabled}
                handleErrorText={this.handleErrorText}
                onChangeInput={this.onChangeInput}
                handleLogin={this.handleLogin}
              />
        }
        { error && <SnackbarContainer msg={error} /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.authReducer.toJS()
  return {
    fields: stateJS.fields,
    loading: stateJS.loading,
    error: stateJS.error,
    disabled: !fieldsNotNull(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...loginActions
  }, dispatch)
}

const { object, bool, string, func } = PropTypes

LoginContainer.propTypes = {
  fields: object.isRequired,
  disabled: bool.isRequired,
  error: string,
  loading: bool.isRequired,
  setFields: func.isRequired,
  loginUser: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
