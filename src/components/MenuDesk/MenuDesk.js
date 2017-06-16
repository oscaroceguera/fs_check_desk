import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { LinkMenuDesk } from '../index'

const MenuContainer = styled.div`
  display: none;
  padding: 2em 1em;
  ${breakpoint('tablet')`
    display: block;
    font-size: 16px;
  `}

  ${breakpoint('desktop')`
    display: block;
    font-size: 24px;
  `}
`

const MenuDesk = ({ location, links }) => (
  <MenuContainer>
    {links.map(({path, label}, key) => <LinkMenuDesk key={key} location={location} path={path} label={label} />)}
  </MenuContainer>
)

MenuDesk.propTypes = {
  location: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default MenuDesk
