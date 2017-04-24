import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as snackbarActions from '../../reducers/snackbarReducer'

class SnackbarContainer extends Component {
  handleActionTouchTap = () => {
    this.props.closeSnackbar()
  }
  handleRequestClose = () => {
    this.props.closeSnackbar()
  }
  render () {
    const { open, msg } = this.props
    return (
      <Snackbar
        open={open}
        message={msg}
        action={'Aceptar'}
        onActionTouchTap={this.handleActionTouchTap}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  const stateJS = state.snackbarReducer.toJS()
  return {
    open: stateJS.open,
    msg: props.msg
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...snackbarActions
  }, dispatch)
}

const { bool, string } = React.PropTypes

SnackbarContainer.propTypes = {
  open: bool.isRequired,
  msg: string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer)
