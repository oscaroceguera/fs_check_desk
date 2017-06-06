import React from 'react'
import {IconButton, IconMenu, MenuItem, Avatar} from 'material-ui'
import {greenA700} from '../../sharedStyles/variables'

const IconMenuAppbar = ({logout}) => (
  <IconMenu
    iconButtonElement={
      <IconButton style={{ padding: 0, margin: 0 }}>
        <Avatar backgroundColor={greenA700}>O</Avatar>
      </IconButton>
  }>
    <MenuItem primaryText='Perfil' />
    <MenuItem onClick={logout} primaryText='Cerrar sesión' />
  </IconMenu>
)

IconMenuAppbar.propTypes = {
  logout: React.PropTypes.func.isRequired
}

export default IconMenuAppbar
