import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../reducers/authReducer'

import Appbar from '../../components/Appbar/Appbar'

class DashboardContainer extends Component {
  render () {
    return (
      <div>
        <Appbar logout={() => this.props.logoutUser()} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.authReducer.toJS()
  return {
    profile: stateJS.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...loginActions
  }, dispatch)
}

const { func, object } = React.PropTypes

DashboardContainer.propTypes = {
  profile: object.isRequired,
  logoutUser: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
