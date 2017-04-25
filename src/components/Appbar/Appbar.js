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

const Appbar = () => (
  <AppbarStyled>
    <Hamburger />
    <Logo home={false}/>
    <IconMenuAppbar />
  </AppbarStyled>
)

export default Appbar
