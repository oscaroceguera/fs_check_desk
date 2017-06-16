import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, MenuItem } from 'material-ui'
import { LinkMenuDesk } from '../index'

const DrawerMenu = ({ open, handleClose, links, location }) => (
  <Drawer open={open} width={150}>
    {
      links.map(({path, label}, key) => (
        <MenuItem key={key} onTouchTap={handleClose}>
          <LinkMenuDesk key={key} location={location} path={path} label={label} />
        </MenuItem>
      ))
    }
  </Drawer>
)

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired
}

export default DrawerMenu
