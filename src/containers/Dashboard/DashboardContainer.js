import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../reducers/Auth'
import * as dashboarActions from '../../reducers/Dashboard'
import styled from 'styled-components'
import Appbar from '../../components/Appbar/Appbar'
import DrawerMenu from '../../components/DrawerMenu/DrawerMenu'
import MenuDesk from '../../components/MenuDesk/MenuDesk'

const links = [
  { path: '/dashboard/schemas', label: 'Esquemas' },
  { path: '/dashboard/checklists', label: 'Checklists' }
]

const PanelContainer = styled.div`
  display: flex;
`

const PanelChildren = styled.div`
  flex-grow: 1;
  padding: 1.5em 3em;
`

class DashboardContainer extends Component {
  render () {
    const { location } = this.props
    return (
      <div>
        <Appbar
          logout={() => this.props.logoutUser()}
          handleToggle={() => this.props.drawerMenu()}
        />
        <PanelContainer>
          <MenuDesk
            location={location.pathname}
            links={links}
          />
          <DrawerMenu
            open={this.props.drawerOpen}
            handleClose={() => this.props.drawerMenuClose()}
            location={location.pathname}
            links={links}
          />
          <PanelChildren>
            {this.props.children}
          </PanelChildren>
        </PanelContainer>
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

const { func, object, bool } = PropTypes

DashboardContainer.propTypes = {
  profile: object.isRequired,
  logoutUser: func.isRequired,
  drawerOpen: bool.isRequired,
  drawerMenu: func.isRequired,
  drawerMenuClose: func.isRequired,
  children: object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
