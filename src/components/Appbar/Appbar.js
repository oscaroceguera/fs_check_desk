import React from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import Logo from '../../components/Logo/Logo'
import IconMenuAppbar from './IconMenuAppbar'
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
    <Hamburger handleToggle={handleToggle}/>
    <Logo home={false}/>
    <IconMenuAppbar logout={logout}/>
  </AppbarStyled>
)

Appbar.propTypes = {
  logout: React.PropTypes.func.isRequired,
  handleToggle: React.PropTypes.func.isRequired
}

export default Appbar
