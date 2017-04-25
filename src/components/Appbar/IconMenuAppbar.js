import React from 'react'
import {IconButton, IconMenu, MenuItem, Avatar} from 'material-ui';
import {greenA700} from '../../sharedStyles/variables'

const IconMenuAppbar = () => (
  <IconMenu
    iconButtonElement={
      <IconButton style={{ padding: 0, margin: 0 }}>
        <Avatar backgroundColor={greenA700}>O</Avatar>
      </IconButton>
  }>
    <MenuItem primaryText="Perfil" />
    <MenuItem primaryText="Cerrar sesión" />
  </IconMenu>
)

export default IconMenuAppbar
