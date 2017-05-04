import React from 'react'
import breakpoint from 'styled-components-breakpoint'
import styled from 'styled-components'
import { lightBlue900 } from '../../sharedStyles/variables'
import IconButton from 'material-ui/IconButton';
import Reorder from 'material-ui/svg-icons/action/reorder'

const HamburgerStyled = styled.div`
  display: block;
  font-size: 12px;

  ${breakpoint('tablet')`
    display: none;
    font-size: 16px;
  `}

  ${breakpoint('desktop')`
    display: none;
    font-size: 24px;
  `}
`

const Hamburger = ({ handleToggle }) => (
  <HamburgerStyled onClick={handleToggle}>
    <IconButton>
      <Reorder color={lightBlue900}/>
    </IconButton>
  </HamburgerStyled>
)

Hamburger.propTypes = {
  handleToggle: React.PropTypes.func.isRequired
}

export default Hamburger
