import React from 'react'
import { Drawer, MenuItem } from 'material-ui'
import LinkMenuDesk from '../Links/LinkMenuDesk'

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
  open: React.PropTypes.bool.isRequired,
  handleClose: React.PropTypes.func.isRequired,
  links: React.PropTypes.array.isRequired,
  location: React.PropTypes.string.isRequired
}

export default DrawerMenu
