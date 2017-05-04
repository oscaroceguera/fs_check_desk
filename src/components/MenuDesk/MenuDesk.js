import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import LinkMenuDesk from '../Links/LinkMenuDesk'

const links = [
  { path: '/dashboard/schemas', label: 'Schemas' },
  { path: '/dashboard/checklists', label: 'Checklists' },
  { path: '/dashboard/schedules', label: 'Schedules' }
]

const MenuContainer = styled.div`
  display: none;
  padding: 1em;
  ${breakpoint('tablet')`
    display: block;
    font-size: 16px;
  `}

  ${breakpoint('desktop')`
    display: block;
    font-size: 24px;
  `}
`

const MenuDesk = ({ location }) => (
  <MenuContainer>
    {links.map(({path, label}, key) => <LinkMenuDesk key={key} location={location} path={path} label={label}/>)}
  </MenuContainer>
)

MenuDesk.propTypes = { location: React.PropTypes.string.isRequired }

export default MenuDesk
