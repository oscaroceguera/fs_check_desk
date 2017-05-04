import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../reducers/authReducer'
import * as dashboarActions from '../../reducers/dashboardReducer'

import Appbar from '../../components/Appbar/Appbar'
import DrawerMenu from '../../components/DrawerMenu/DrawerMenu'
import MenuDesk from '../../components/MenuDesk/MenuDesk'

const links = [
  { path: '/dashboard/schemas', label: 'Schemas' },
  { path: '/dashboard/checklists', label: 'Checklists' },
  { path: '/dashboard/schedules', label: 'Schedules' }
]


class DashboardContainer extends Component {
  // Handle logout
  onLogout = () => this.props.logoutUser()

  // Handle Drawer menu
  onMenu = () => this.props.drawerMenu()

  // Handle Drawer menu close
  onMenuClose = () => this.props.drawerMenuClose()

  render () {
    const { location } = this.props
    return (
      <div>
        <Appbar
          logout={this.onLogout}
          handleToggle={this.onMenu}
        />
        <div style={{ display: 'flex' }}>
          <MenuDesk
            location={location.pathname}
            links={links}
          />
          <DrawerMenu
            open={this.props.drawerOpen}
            handleClose={this.onMenuClose}
            location={location.pathname}
            links={links}
          />
          <div style={{ flexGrow: 1, padding: '1.5em 3em' }}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const auth = state.authReducer.toJS()
  const dashboard = state.dashboardReducer.toJS()
  return {
    profile: auth.profile,
    drawerOpen: dashboard.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...loginActions,
    ...dashboarActions
  }, dispatch)
}

const { func, object, bool } = React.PropTypes

DashboardContainer.propTypes = {
  profile: object.isRequired,
  logoutUser: func.isRequired,
  drawerOpen: bool.isRequired,
  drawerMenu: func.isRequired,
  drawerMenuClose: func.isRequired,
  children: object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
