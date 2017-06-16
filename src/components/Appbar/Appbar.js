import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Logo, Hamburger, IconMenuAppbar } from '../index'
import {BX_SHADOW} from '../../sharedStyles/variables'

const AppbarStyled = styled.div`
  padding: .5em .2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${BX_SHADOW};
`

const Appbar = ({ logout, handleToggle }) => (
  <AppbarStyled>
    <Hamburger handleToggle={handleToggle} />
    <Logo home={false} />
    <IconMenuAppbar logout={logout} />
  </AppbarStyled>
)

Appbar.propTypes = {
  logout: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Appbar
