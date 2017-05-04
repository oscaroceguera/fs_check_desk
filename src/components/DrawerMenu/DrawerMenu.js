import React from 'react'
import { Drawer, MenuItem } from 'material-ui'

const DrawerMenu = ({ open, handleClose }) => (
  <Drawer open={open}>
    <MenuItem onTouchTap={handleClose}>Menu Item</MenuItem>
    <MenuItem onTouchTap={handleClose}>Menu Item 2</MenuItem>
  </Drawer>
)

DrawerMenu.propTypes = {
  open: React.PropTypes.bool.isRequired,
  handleClose: React.PropTypes.func.isRequired
}

export default DrawerMenu
